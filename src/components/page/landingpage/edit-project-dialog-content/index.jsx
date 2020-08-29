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
import { FetchAllTool, UpdateProject } from "../../../../actions/landingpage";
import ThirdStepScreen from "./index.screen3";
import { CloseDialogAction } from "../../../../actions/dialog";
import { removeThis } from "../../../../utils/objectHandler";
import { imageToUpload, imageToLocal } from "../../../../utils/imageHandler";

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

const EditProjectDialogContent = ({ id, onUpdated }) => {
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
		setLocalState((current) => ({
			...current,
			toolsOptions: state.landingPage.tools,
		}));
	}, [state.landingPage.tools]);

	useEffect(() => {
		const data = onConvertDataToLocalState();
		const dataDetail = onConvertDataDetailToLocalState();
		setLocalState((current) => ({ ...current, ...data, ...dataDetail }));
	}, []);

	const onGetAllTools = async () => {
		await FetchAllTool(dispatch);
	};

	const onConvertDataToLocalState = () => {
		const { data } = state.landingPage;

		// Get the data
		let result = Object.assign([], data);

		// Filter
		result = result.filter((data) => data._id === id);
		result = Object.assign({}, ...result);

		// Re-structure the image data
		const keyImage = ["image"];
		result = imageToLocal(result, keyImage);

		// Return
		return result;
	};

	const onConvertDataDetailToLocalState = () => {
		const { dataDetail } = state.landingPage;

		// Get the data
		let result = Object.assign({}, dataDetail);

		// Re-structure the image data
		const keyImage = ["modalImage", "organizationImage"];
		result = imageToLocal(result, keyImage);

		// Return
		return result;
	};

	const onFormStateChange = (e) => {
		setLocalState({
			...localState,
			[e.target.name]: e.target.value,
		});
	};

	const onButtonStepClicked = (nextStep) => {
		setLocalState((current) => ({ ...current, step: nextStep }));
	};

	const onCreateProject = async () => {
		let toCreate = Object.assign({}, localState);

		// Remove unnecesary data
		const keyToRemove = ["steps", "step", "toolsOptions", "newTool"];
		toCreate = removeThis(toCreate, keyToRemove);

		// Send file only
		const imageKey = ["image", "modalImage", "organizationImage"];
		toCreate = imageToUpload(toCreate, imageKey);

		const result = await UpdateProject(dispatch, toCreate, id);

		// Status check
		if (result) {
			onButtonStepClicked(localState.step + 1);
			onUpdated();
		}
	};

	const onCloseDialog = async () => {
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

				{localState.step === localState.steps.length - 1 ? (
					<Button
						key="button-upload"
						color="primary"
						onClick={() => onCreateProject()}
					>
						Update
					</Button>
				) : null}
				{localState.step === localState.steps.length ? (
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

export default EditProjectDialogContent;
