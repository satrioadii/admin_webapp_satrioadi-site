import { OPEN_DIALOG, CLOSE_DIALOG } from "./index.type";

const DialogReducer = (state, action) => {
	switch (action.type) {
		case OPEN_DIALOG:
			return {
				...state,
				isOpen: true,
				title: action.title,
				DialogComponent: action.component,
			};
		case CLOSE_DIALOG:
			return { ...state, isOpen: false };
		default:
			return state;
	}
};

export default DialogReducer;
