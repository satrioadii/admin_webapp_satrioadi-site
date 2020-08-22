import { OPEN_SNACKBAR, CLOSE_SNACKBAR } from "./index.type";

const SnackbarReducer = (state, action) => {
	switch (action.type) {
		case OPEN_SNACKBAR:
			console.log("OPEN SNACKBAR");
			console.log(action);
			return {
				isOpen: true,
				message: action.message,
				type: action.snacktype,
			};
		case CLOSE_SNACKBAR:
			console.log("CLOSE");
			return { ...state, isOpen: false };
		default:
			console.log("DEAULT");
			return state;
	}
};

export default SnackbarReducer;
