import React, { Fragment, useContext } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { CloseDialogAction } from "../../../actions/dialog/";
import { DialogContextDispatch } from "../../../Providers/Dialog/index";

const GlobalDeleteDialog = ({ onAccept }) => {
	const localDispatch = {
		dialog: useContext(DialogContextDispatch),
	};

	const onAcceptHandler = () => {
		onAccept();
		CloseDialogAction(localDispatch);
	};

	const onCancelHandler = () => {
		CloseDialogAction(localDispatch);
	};
	return (
		<Fragment>
			<Box marginBottom={{ xs: "8px", md: "16px" }}>
				<Box marginBottom={{ xs: "16px", md: "24px" }}>
					<Typography variant="h5">
						Are you sure want to delete this?
					</Typography>
				</Box>
				<Box display={{ xs: "block", md: "flex" }} justifyContent="center">
					<Box
						marginRight={{ xs: "0px", md: "4px" }}
						marginBottom={{ xs: "8px", md: "0px" }}
						width="100%"
					>
						<Button
							variant="contained"
							color="secondary"
							fullWidth
							onClick={() => onAcceptHandler()}
						>
							Yes
						</Button>
					</Box>
					<Box marginLeft={{ xs: "0px", md: "4px" }} width="100%">
						<Button
							variant="outlined"
							color="secondary"
							fullWidth
							onClick={() => onCancelHandler()}
						>
							No
						</Button>
					</Box>
				</Box>
			</Box>
		</Fragment>
	);
};
export default GlobalDeleteDialog;
