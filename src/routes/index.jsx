import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
	},
}));

const IndexRoutes = () => {
	const classes = useStyles();
	const state = useContext(AuthContextState);
	console.log(state);

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
				HAI
				<GlobalAppBar />
				<GlobalDrawer />
				<main className={classes.content}>
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
