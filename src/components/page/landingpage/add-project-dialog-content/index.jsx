import React, { Fragment } from "react";
import {
	Stepper,
	Step,
	StepLabel,
	Box,
	TextField,
	FormControl,
	OutlinedInput,
	InputLabel,
} from "@material-ui/core";
import { useState } from "react";
import {
	GlobalTextForm,
	GlobalTextMultilineForm,
	GlobalImageForm,
} from "../../../global/form";
import GlobalWidthMax from "../../../global/widthmax";

const StepperLoader = ({ localState }) => {
	return (
		<div style={{ width: "100%" }}>
			<Stepper activeStep={localState.step} alternativeLabel>
				<Step>
					<StepLabel>Overview Content</StepLabel>
				</Step>
				<Step>
					<StepLabel>Detail Content</StepLabel>
				</Step>
			</Stepper>
		</div>
	);
};

const AddProjectDialogContent = () => {
	const [localState, setLocalState] = useState({
		step: 0,
		title: "",
		description: "",
		image: undefined,
	});

	const onFormStateChange = (e) => {
		setLocalState({ ...localState, [e.target.name]: e.target.value });
	};

	return (
		<Fragment>
			<StepperLoader localState={localState} />
			<GlobalWidthMax />
			<Box marginTop={{ xs: 1, md: 2 }}>
				<GlobalImageForm
					required
					name="image"
					label="Select an image"
					width="100%"
					paddingTop="133%"
					value={localState.image}
					onChange={(e) => onFormStateChange(e)}
				/>
				<GlobalTextForm
					name="title"
					label="Title"
					placeholder="Enter the title"
					value={localState.title}
					onChange={(e) => onFormStateChange(e)}
				/>
				<GlobalTextMultilineForm
					name="description"
					label="Description"
					placeholder="Enter the description"
					value={localState.description}
					onChange={(e) => onFormStateChange(e)}
				/>
			</Box>
		</Fragment>
	);
};

export default AddProjectDialogContent;
