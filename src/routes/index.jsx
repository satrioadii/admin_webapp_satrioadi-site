import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import { AuthContextState, AuthContextDispatch } from "../Providers/Auth/index";
import LandingPageRoutes from "./landingpage";
import LoginRoutes from "./login";
import GlobalAppBar from "../components/global/appbar";
import GlobalDrawer from "../components/global/drawer";
import { AppbarContextState, AppbarContextDispatch } from "../Providers/Appbar";
import { CLOSE_APPBAR } from "../Providers/Appbar/index.type";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	toolbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(2),
		overflow: "hidden",
		transition: theme.transitions.create("oppacity", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	contentShrink: {
		opacity: 0,
		padding: theme.spacing(2, 0),
		[theme.breakpoints.up("sm")]: {
			opacity: 0.2,
			padding: theme.spacing(2),
		},
		transition: theme.transitions.create(["opacity", "padding"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	contentGrow: {
		transition: theme.transitions.create(["opacity", "padding"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
}));

const IndexRoutes = () => {
	const classes = useStyles();
	const state = useContext(AuthContextState);
	const dispatchAuth = useContext(AuthContextDispatch);
	const { isOpen } = useContext(AppbarContextState);
	const dispatchAppbar = useContext(AppbarContextDispatch);

	// If token is not exist, force to login route
	if (!state.token) {
		return (
			<Fragment>
				<Router>
					<Switch>
						<LoginRoutes path="/login" />
						<Route path="*">
							<Redirect to="/login" />
						</Route>
					</Switch>
				</Router>
			</Fragment>
		);
	}

	// else
	return (
		<Fragment>
			<div className={classes.root}>
				<GlobalAppBar />
				<GlobalDrawer />

				<main
					className={clsx(classes.content, {
						[classes.contentShrink]: isOpen,
						[classes.contentGrow]: !isOpen,
					})}
					onClick={isOpen ? () => dispatchAppbar({ type: CLOSE_APPBAR }) : null}
				>
					<div className={classes.toolbar} />
					<Container maxWidth="lg">
						<Router>
							<Switch>
								<LandingPageRoutes exact path="/" />
								<Route path="*">
									<Redirect to="/" />
								</Route>
							</Switch>
						</Router>
					</Container>
				</main>
			</div>
		</Fragment>
	);
};

export default IndexRoutes;
