import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "../../pages/landingpage";
import LandingPageContextProvider from "../../Providers/Landingpage";

const LandingPageRoutes = ({ children, ...rest }) => {
	return (
		<Route {...rest}>
			<LandingPageContextProvider>
				<LandingPage />
			</LandingPageContextProvider>
		</Route>
	);
};

export default LandingPageRoutes;
