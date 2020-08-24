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
	Button,
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

const FirstStepScreen = ({ localState, onChange, stepScreen, step }) => {
	return (
		<Fragment>
			{stepScreen === step ? (
				<Fragment>
					<GlobalImageForm
						required
						name="image"
						label="Select an image"
						width="100%"
						paddingTop="133%"
						value={localState.image}
						onChange={(e) => onChange(e)}
					/>
					<GlobalTextForm
						required
						name="title"
						label="Title"
						placeholder="Enter the title"
						value={localState.title}
						onChange={(e) => onChange(e)}
					/>
					<GlobalTextMultilineForm
						required
						name="description"
						label="Description"
						placeholder="Enter the description"
						value={localState.description}
						onChange={(e) => onChange(e)}
					/>
				</Fragment>
			) : null}
		</Fragment>
	);
};
const SecondStepScreen = ({ localState, onChange, stepScreen, step }) => {
	return (
		<Fragment>
			{stepScreen === step ? (
				<Fragment>
					<GlobalImageForm
						required
						name="modalImage"
						label="Select an image for modal"
						width="100%"
						paddingTop="75%"
						value={localState.modalImage}
						onChange={(e) => onChange(e)}
					/>
					<GlobalTextForm
						required
						name="category"
						label="Category"
						placeholder="Enter the category"
						value={localState.category}
						onChange={(e) => onChange(e)}
					/>
					<GlobalTextMultilineForm
						required
						name="descriptionDetail"
						label="Description Detail"
						placeholder="Enter the description detail"
						value={localState.descriptionDetail}
						onChange={(e) => onChange(e)}
					/>
					<GlobalImageForm
						required
						name="organizationImage"
						label="Select an image for oraginzation"
						width="100%"
						paddingTop="75%"
						value={localState.organizationImage}
						onChange={(e) => onChange(e)}
					/>
				</Fragment>
			) : null}
		</Fragment>
	);
};

const AddProjectDialogContent = () => {
	const [localState, setLocalState] = useState({
		steps: ["Overview Content", "Detail Content"],
		step: 0,
		title: "",
		description: "",
		image: undefined,
		modalImage: undefined,
		category: "",
		descriptionDetail: "",
		organizationImage: "",
		tools: [],
		links: [],
		toolsOptions: [{ label: "Tunggu sebentar", value: undefined }],
	});

	const onFormStateChange = (e) => {
		setLocalState({ ...localState, [e.target.name]: e.target.value });
	};

	const onButtonStepClicked = (nextStep) => {
		setLocalState({ ...localState, step: nextStep });
	};

	return (
		<Fragment>
			<StepperLoader localState={localState} />
			<GlobalWidthMax />
			<Box marginTop={{ xs: 1, md: 2 }} marginBottom={{ xs: 1, md: 2 }}>
				<FirstStepScreen
					localState={localState}
					onChange={onFormStateChange}
					step={localState.step}
					stepScreen={0}
				/>
				<SecondStepScreen
					localState={localState}
					onChange={onFormStateChange}
					step={localState.step}
					stepScreen={1}
				/>
			</Box>
			<Box display="flex" justifyContent="space-between">
				<Button
					color="secondary"
					disabled={localState.step === 0 ? true : false}
					onClick={() => onButtonStepClicked(localState.step - 1)}
				>
					Prev
				</Button>
				<Button
					color="primary"
					onClick={() =>
						localState.step < localState.steps.length
							? onButtonStepClicked(localState.step + 1)
							: null
					}
				>
					Next
				</Button>
			</Box>
		</Fragment>
	);
};

export default AddProjectDialogContent;
