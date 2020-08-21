import React, { Fragment } from "react";
import AuthContextProvider from "./Auth";
import AppbarContextProvider from "./Appbar";
import DialogContextProvider from "./Dialog";

const IndexGlobalProvider = ({ children }) => {
	return (
		<Fragment>
			<AppbarContextProvider>
				<DialogContextProvider>
					<AuthContextProvider>{children}</AuthContextProvider>
				</DialogContextProvider>
			</AppbarContextProvider>
		</Fragment>
	);
};

export default IndexGlobalProvider;
