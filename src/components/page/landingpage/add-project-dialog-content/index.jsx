import { Box, Button, Step, StepLabel, Stepper } from "@material-ui/core";
import React, { Fragment, useEffect, useState } from "react";
import GlobalWidthMax from "../../../global/widthmax";
import FirstStepScreen from "./index.screen1";
import SecondStepScreen from "./index.screen2";
import { useContext } from "react";
import {
	LandingPageContextDispatch,
	LandingPageContextState,
} from "../../../../Providers/Landingpage";
import { SnackbarContextDispatch } from "../../../../Providers/Snackbar";
import { DialogContextDispatch } from "../../../../Providers/Dialog";
import { FetchAllTool, CreateProject } from "../../../../actions/landingpage";

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
	const dispatch = {
		landingPage: useContext(LandingPageContextDispatch),
		snackbar: useContext(SnackbarContextDispatch),
		dialog: useContext(DialogContextDispatch),
	};
	const state = {
		landingPage: useContext(LandingPageContextState),
	};

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
		toolsOptions: state.landingPage.tools,
		links: [],
	});

	useEffect(() => {
		onGetAllTools();
	}, []);

	const onGetAllTools = () => {
		FetchAllTool(dispatch);
	};

	const onFormStateChange = (e) => {
		setLocalState({ ...localState, [e.target.name]: e.target.value });
	};

	const onButtonStepClicked = (nextStep) => {
		setLocalState({ ...localState, step: nextStep });
	};

	const onCreateProject = async () => {
		let toCreate = Object.assign({}, localState);
		// Remove unnecesary data
		delete toCreate.steps;
		delete toCreate.step;
		delete toCreate.toolsOptions;

		// Send file only
		const imageKey = ["image", "modalImage", "organizationImage"];
		await imageKey.forEach((data) => {
			if (
				typeof toCreate[data] === "undefined" ||
				typeof toCreate[data] === "string"
			)
				return;
			else {
				toCreate = { ...toCreate, [data]: toCreate[data].file };
			}
		});
		const result = await CreateProject(dispatch, toCreate);

		// Status check
		if (result.status === 200 || result.status === 201) {
			onButtonStepClicked(localState.step + 1);
		}
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
					options={localState.toolsOptions}
					onRefreshData={() => onGetAllTools()}
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
				{localState.step === 0 ? (
					<Button
						key="button-next"
						color="primary"
						onClick={() => onButtonStepClicked(localState.step + 1)}
					>
						Next
					</Button>
				) : null}

				{localState.step === 1 ? (
					<Button
						key="button-upload"
						color="primary"
						onClick={() => onCreateProject()}
					>
						Upload
					</Button>
				) : null}
			</Box>
		</Fragment>
	);
};

export default AddProjectDialogContent;
