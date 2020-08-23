import React, { createContext, useReducer, Fragment } from "react";
import DialogReducer from "./index.reducer";

const INITIAL_STATE = {
	isOpen: false,
	title: "Title",
	DialogComponent: () => <Fragment></Fragment>,
};

export const DialogContextState = createContext();
export const DialogContextDispatch = createContext();

const DialogContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(DialogReducer, INITIAL_STATE);

	return (
		<DialogContextDispatch.Provider value={dispatch}>
			<DialogContextState.Provider value={state}>
				{children}
			</DialogContextState.Provider>
		</DialogContextDispatch.Provider>
	);
};

export default DialogContextProvider;
