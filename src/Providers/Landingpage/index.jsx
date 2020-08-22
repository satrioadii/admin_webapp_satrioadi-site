import React, { createContext, useReducer } from "react";
import LandingPageReducer from "./index.reducer";

const INITIAL_STATE = {
	isLoading: false,
	data: [],
	dataDetail: { category: null, tools: [], links: [] },
	pagination: {},
	count: 0,
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
