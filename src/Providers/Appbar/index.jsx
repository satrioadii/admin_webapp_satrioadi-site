import React, { createContext, useReducer } from "react";
import AppbarReducer from "./index.reducer";

const INITIAL_STATE = {
	isOpen: false,
};

export const AppbarContextState = createContext();
export const AppbarContextDispatch = createContext();

const AppbarContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppbarReducer, INITIAL_STATE);

	return (
		<AppbarContextDispatch.Provider value={dispatch}>
			<AppbarContextState.Provider value={state}>
				{children}
			</AppbarContextState.Provider>
		</AppbarContextDispatch.Provider>
	);
};

export default AppbarContextProvider;
