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
import {
	FetchAllTool,
	CreateProject,
	FetchAllProject,
} from "../../../../actions/landingpage";
import ThirdStepScreen from "./index.screen3";
import { CloseDialogAction } from "../../../../actions/dialog";

const StepperLoader = ({ localState }) => {
	return (
		<div style={{ width: "100%" }}>
			<Stepper activeStep={localState.step} alternativeLabel>
				{localState.steps.map((data, index) => (
					<Step key={`projectStep${index}`}>
						<StepLabel>{data}</StepLabel>
					</Step>
				))}
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
		newTool: false,
		links: [],
	});

	useEffect(() => {
		onGetAllTools();
	}, []);

	useEffect(() => {
		setLocalState((current) => ({
			...current,
			toolsOptions: state.landingPage.tools,
		}));
	}, [state.landingPage.tools]);

	const onGetAllTools = () => FetchAllTool(dispatch);

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
		delete toCreate.newTool;

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
		if (result) {
			onButtonStepClicked(localState.step + 1);
			FetchAllProject(dispatch);
		}
	};

	const onCloseDialog = () => {
		CloseDialogAction(dispatch);
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
					dispatch={dispatch}
				/>
				<ThirdStepScreen step={localState.step} stepScreen={2} />
			</Box>
			<Box display="flex" justifyContent="space-between">
				{localState.step === 2 ? null : (
					<Button
						color="secondary"
						disabled={localState.step === 0 ? true : false}
						onClick={() => onButtonStepClicked(localState.step - 1)}
					>
						Prev
					</Button>
				)}

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
				{localState.step === 2 ? (
					<Button
						key="button-upload"
						color="primary"
						variant="outlined"
						fullWidth
						onClick={() => onCloseDialog()}
					>
						Close Dialog
					</Button>
				) : null}
			</Box>
		</Fragment>
	);
};

export default AddProjectDialogContent;
