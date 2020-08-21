import { OPEN_APPBAR, CLOSE_APPBAR } from "./index.type";

const AppbarReducer = (state, action) => {
	switch (action.type) {
		case OPEN_APPBAR:
			return { ...state, isOpen: true };
		case CLOSE_APPBAR:
			return { ...state, isOpen: false };
		default:
			return state;
	}
};

export default AppbarReducer;
