import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "../../pages/landingpage";
import LandingPageContextProvider from "../../Providers/Landingpage";
import GlobalDialog from "../../components/global/dialog";

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
