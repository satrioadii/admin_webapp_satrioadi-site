import React, { useContext, Fragment } from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { DialogContextDispatch } from "../../../../Providers/Dialog";
import { OpenDialogAction } from "../../../../actions/dialog";
import AddProjectDialogContent from "../add-project-dialog-content";

const HomeAddProjectButton = () => {
	const dispatch = { dialog: useContext(DialogContextDispatch) };

	return (
		<Fragment>
			<Button
				disableElevation
				variant="contained"
				color="primary"
				onClick={() => {
					OpenDialogAction(
						dispatch,
						"Create New Project",
						AddProjectDialogContent
					);
				}}
			>
				<AddIcon /> Add New Project
			</Button>
		</Fragment>
	);
};

export default HomeAddProjectButton;
