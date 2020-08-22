import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "../../pages/landingpage";

const LandingPageRoutes = ({ children, ...rest }) => {
	return (
		<Route {...rest}>
			<LandingPage />
		</Route>
	);
};

export default LandingPageRoutes;
