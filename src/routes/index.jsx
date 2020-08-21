import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import { AuthContextState } from "../Providers/Auth/index";
import HomeRoutes from "./home";
import LoginRoutes from "./login";
import GlobalAppBar from "../components/global/Appbar";
import GlobalDrawer from "../components/global/Drawer";
import { AppbarContextState, AppbarContextDispatch } from "../Providers/Appbar";
import { CLOSE_APPBAR } from "../Providers/Appbar/index.type";

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
		opacity: 0.1,
		padding: theme.spacing(2, 0),
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
	const { isOpen } = useContext(AppbarContextState);
	const dispatch = useContext(AppbarContextDispatch);

	// If token is not exist
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
					onClick={isOpen ? () => dispatch({ type: CLOSE_APPBAR }) : null}
				>
					<div className={classes.toolbar} />

					<Router>
						<Switch>
							<HomeRoutes exact path="/" />
							<LoginRoutes path="/dummylogin" />
							<Route path="*">
								<Redirect to="/" />
							</Route>
						</Switch>
					</Router>
				</main>
			</div>
		</Fragment>
	);
};

export default IndexRoutes;
