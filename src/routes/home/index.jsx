import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../../pages/home";

const HomeRoutes = ({ children, ...rest }) => {
	return (
		<Route {...rest}>
			<HomePage />
		</Route>
	);
};

export default HomeRoutes;
