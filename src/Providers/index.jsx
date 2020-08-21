import React, { Fragment } from "react";
import AuthContextProvider from "./Auth";
import AppbarContextProvider from "./Appbar";

const IndexGlobalProvider = ({ children }) => {
	return (
		<Fragment>
			<AppbarContextProvider>
				<AuthContextProvider>{children}</AuthContextProvider>
			</AppbarContextProvider>
		</Fragment>
	);
};

export default IndexGlobalProvider;
