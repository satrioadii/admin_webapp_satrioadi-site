import React, { Fragment } from "react";
import AuthContextProvider from "./Auth";
import AppbarContextProvider from "./Appbar";
import DialogContextProvider from "./Dialog";
import SnackbarContextProvider from "./Snackbar";

const IndexGlobalProvider = ({ children }) => {
	return (
		<Fragment>
			<SnackbarContextProvider>
				<AppbarContextProvider>
					<DialogContextProvider>
						<AuthContextProvider>{children}</AuthContextProvider>
					</DialogContextProvider>
				</AppbarContextProvider>
			</SnackbarContextProvider>
		</Fragment>
	);
};

export default IndexGlobalProvider;
