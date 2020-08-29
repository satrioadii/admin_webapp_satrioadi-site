import React from "react";
import { Route } from "react-router-dom";
import GlobalDialog from "../../components/global/dialog";
import LandingPage from "../../pages/landingpage";
import LandingPageContextProvider from "../../Providers/Landingpage";

const LandingPageRoutes = ({ children, ...rest }) => {
	return (
		<Route {...rest}>
			<LandingPageContextProvider>
				<LandingPage />
				<GlobalDialog />
			</LandingPageContextProvider>
		</Route>
	);
};

export default LandingPageRoutes;
