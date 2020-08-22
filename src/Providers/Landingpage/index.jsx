import React, { createContext, useReducer } from "./node_modules/react";
import LandingPageReducer from "./index.reducer";

const INITIAL_STATE = {
	isLoading: false,
	data: [],
	dataDetail: {},
};

export const LandingPageContextState = createContext();
export const LandingPageContextDispatch = createContext();

const LandingPageContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(LandingPageReducer, INITIAL_STATE);

	return (
		<LandingPageContextDispatch.Provider value={dispatch}>
			<LandingPageContextState.Provider value={state}>
				{children}
			</LandingPageContextState.Provider>
		</LandingPageContextDispatch.Provider>
	);
};

export default LandingPageContextProvider;
