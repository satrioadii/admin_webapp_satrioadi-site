import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";
import React, { useContext } from "react";
import {
	SnackbarContextDispatch,
	SnackbarContextState,
} from "../../../Providers/Snackbar";
import { CLOSE_SNACKBAR } from "../../../Providers/Snackbar/index.type";

const Alert = (props) => {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
		"& > * + *": {
			marginTop: theme.spacing(2),
		},
	},
}));

const GlobalSnackbar = () => {
	const classes = useStyles();

	const dispatch = useContext(SnackbarContextDispatch);
	const state = useContext(SnackbarContextState);

	console.log(state);

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		dispatch({ type: CLOSE_SNACKBAR });
	};

	return (
		<div className={classes.root}>
			<Snackbar
				open={state.isOpen}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				autoHideDuration={2000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity={state.type}>
					{state.message}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default GlobalSnackbar;
