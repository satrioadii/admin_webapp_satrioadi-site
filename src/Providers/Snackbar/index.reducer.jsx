import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from "./index.type";

const SnackbarReducer = (state, action) => {
	switch (action.type) {
		case OPEN_SNACKBAR:
			return {
				isOpen: true,
				message: action.message,
				type: action.snacktype,
			};
		case CLOSE_SNACKBAR:
			return { ...state, isOpen: false };
		default:
			return state;
	}
};

export default SnackbarReducer;
