import { CLOSE_DIALOG, OPEN_DIALOG } from "../../Providers/Dialog/index.type";

export const OpenDialogAction = (dispatch) => {
	dispatch({ type: OPEN_DIALOG });
};

export const CloseDialogAction = (dispatch) => {
	dispatch({ type: CLOSE_DIALOG });
};
