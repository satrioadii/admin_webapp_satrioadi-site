import React, { useContext, Fragment } from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { DialogContextDispatch } from "../../../../Providers/Dialog";
import { OPEN_DIALOG } from "../../../../Providers/Dialog/index.type";

const HomeAddProjectButton = () => {
	const dispatch = { dialog: useContext(DialogContextDispatch) };

	return (
		<Fragment>
			<Button
				disableElevation
				variant="contained"
				color="primary"
				onClick={() => {
					dispatch.dialog({ type: OPEN_DIALOG, title: "Add New Project" });
				}}
			>
				<AddIcon /> Add New Project
			</Button>
		</Fragment>
	);
};

export default HomeAddProjectButton;
