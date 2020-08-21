import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "../../pages/login";

const LoginRoutes = ({ children, ...rest }) => {
	return (
		<Route {...rest}>
			<LoginPage />
		</Route>
	);
};

export default LoginRoutes;
