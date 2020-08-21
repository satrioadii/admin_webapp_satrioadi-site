import React, { Fragment } from "react";
import IndexGlobalProvider from "./Providers";
import IndexRoutes from "./routes";

function App() {
	return (
		<Fragment>
			<IndexGlobalProvider>
				<IndexRoutes />
			</IndexGlobalProvider>
		</Fragment>
	);
}

export default App;
