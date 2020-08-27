import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import React, { Fragment, useContext, useEffect } from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
	useHistory,
	useLocation,
} from "react-router-dom";
import GlobalAppBar from "../components/global/appbar";
import GlobalDrawer from "../components/global/drawer";
import GlobalSnackbar from "../components/global/snackbar";
import { AppbarContextDispatch, AppbarContextState } from "../Providers/Appbar";
import { CLOSE_APPBAR } from "../Providers/Appbar/index.type";
import { AuthContextState, AuthContextDispatch } from "../Providers/Auth/index";
import LandingPageRoutes from "./landingpage";
import LoginRoutes from "./login";
import { SnackbarContextDispatch } from "../Providers/Snackbar";
import { CheckAuthAction } from "../actions/auth";

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
	const dispatch = {
		appbar: useContext(AppbarContextDispatch),
		auth: useContext(AuthContextDispatch),
		snackbar: useContext(SnackbarContextDispatch),
	};
	const state = {
		auth: useContext(AuthContextState),
		appbar: useContext(AppbarContextState),
	};
	const { isOpen } = state.appbar;

	// Check auth every time the page change
	useEffect(() => {
		CheckAuthAction(dispatch);
	}, [window.location.pathname]);

	// If token is not exist, force to login route
	if (!state.auth.token) {
		return (
			<Fragment>
				<GlobalSnackbar />
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
					onClick={
						isOpen ? () => dispatch.appbar({ type: CLOSE_APPBAR }) : null
					}
				>
					<GlobalSnackbar />
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
