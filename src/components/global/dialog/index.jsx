import React, { Fragment } from "react";
import {
	Box,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	makeStyles,
	Typography,
	Slide,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useContext } from "react";
import {
	DialogContextState,
	DialogContextDispatch,
} from "../../../Providers/Dialog";
import { CloseDialogAction } from "../../../actions/dialog";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const styles = makeStyles((theme) => {
	return {
		customShadow: {
			boxShadow: "0px 0px 30px 0px rgba(210,210,210,0.8)",
			border: `2px solid ${theme.palette.owngray1.main}`,
		},
	};
});

const GlobalDialog = () => {
	const dispatch = { dialog: useContext(DialogContextDispatch) };
	const state = { dialog: useContext(DialogContextState) };
	const { isOpen, title, DialogComponent } = state.dialog;
	const classes = styles();
	const onCloseDialog = () => {
		CloseDialogAction(dispatch);
	};

	return (
		<Fragment>
			<Dialog
				BackdropProps={{ style: { backgroundColor: "rgba(250,250,250,0.6)" } }}
				PaperProps={{ className: classes.customShadow }}
				open={isOpen}
				onClose={() => onCloseDialog()}
				scroll="body"
				maxWidth="sm"
				TransitionComponent={Transition}
			>
				<DialogTitle>
					<Box display="flex">
						<Box flexGrow={1}>
							{/* Title */}
							<Typography variant="h6" component="h3" color="primary">
								{title}
							</Typography>
						</Box>{" "}
						<Box>
							<Close
								style={{ cursor: "pointer", fontSize: "28px" }}
								onClick={() => onCloseDialog()}
							/>
						</Box>
					</Box>
				</DialogTitle>
				<DialogContent>
					{DialogComponent ? <DialogComponent /> : null}
				</DialogContent>
				<DialogActions></DialogActions>
			</Dialog>
		</Fragment>
	);
};

export default GlobalDialog;
