import React, { createContext, useReducer } from "react";
import AuthReducer from "./index.reducer";
import { GetCookie } from "../../utils/cookiesHandler";

const INITIAL_STATE = {
	isLoading: false,
	errMessage: null,
	token: GetCookie("satrio_admin_token") || null,
	role: null,
};

export const AuthContextState = createContext();
export const AuthContextDispatch = createContext();

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

	return (
		<AuthContextDispatch.Provider value={dispatch}>
			<AuthContextState.Provider value={state}>
				{children}
			</AuthContextState.Provider>
		</AuthContextDispatch.Provider>
	);
};

export default AuthContextProvider;
