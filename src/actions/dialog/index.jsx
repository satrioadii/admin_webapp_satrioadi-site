import { CLOSE_DIALOG, OPEN_DIALOG } from "../../Providers/Dialog/index.type";

export const OpenDialogAction = (dispatch, title, id) => {
	dispatch.dialog({ type: OPEN_DIALOG, title: title });
};

export const CloseDialogAction = (dispatch) => {
	dispatch.dialog({ type: CLOSE_DIALOG });
};
