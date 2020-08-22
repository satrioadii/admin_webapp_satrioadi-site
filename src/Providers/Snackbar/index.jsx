import React, { createContext, useReducer } from "react";
import SnackbarReducer from "./index.reducer";

const INITIAL_STATE = {
	isOpen: false,
	message: "testing snackbar",
	type: "information",
};

export const SnackbarContextState = createContext();
export const SnackbarContextDispatch = createContext();

const SnackbarContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(SnackbarReducer, INITIAL_STATE);

	return (
		<SnackbarContextDispatch.Provider value={dispatch}>
			<SnackbarContextState.Provider value={state}>
				{children}
			</SnackbarContextState.Provider>
		</SnackbarContextDispatch.Provider>
	);
};

export default SnackbarContextProvider;
