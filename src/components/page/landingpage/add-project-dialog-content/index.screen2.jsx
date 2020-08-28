import React, { Fragment } from "react";
import {
	GlobalImageForm,
	GlobalTextForm,
	GlobalTextMultilineForm,
} from "../../../global/form";
import GlobalAutocompleteChipsSelectForm from "../../../global/form/chips/index.select";
import GlobalAutocompleteChipsAddForm from "../../../global/form/chips/index.add";
import { Button, Box } from "@material-ui/core";
import { CreateTool } from "../../../../actions/landingpage";

const SecondStepScreen = ({
	step,
	stepScreen,
	localState,
	onChange,
	options,
	onRefreshData,
	dispatch,
}) => {
	// Create new tool immediately
	const newToolHandler = async (e) => {
		const created = await CreateTool(dispatch, e.target.value[0]);
		if (created) {
			onChange({ target: { name: "newTool", value: false } });
		}
	};

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
					<GlobalAutocompleteChipsSelectForm
						name="tools"
						label="Add tools"
						options={options}
						value={localState.tools}
						onChange={(e) => onChange(e)}
						onRefreshData={() => onRefreshData()}
					/>

					{/* Add new tool */}
					<Box marginBottom="16px">
						<Button
							variant="outlined"
							color="primary"
							fullWidth={!localState.newTool}
							onClick={(e) =>
								onChange({
									target: { name: "newTool", value: !localState.newTool },
								})
							}
						>
							{localState.newTool ? "Done" : "Add new tool"}
						</Button>
					</Box>
					{localState.newTool ? (
						<GlobalAutocompleteChipsAddForm
							name="newToolData"
							label="Add new tool"
							variant="outlined"
							value={[]}
							onChange={(e) => newToolHandler(e)}
						/>
					) : null}
					{/* Add new tool end */}

					<GlobalAutocompleteChipsAddForm
						name="links"
						label="Add links"
						value={localState.links}
						onChange={(e) => onChange(e)}
					/>
				</Fragment>
			) : null}
		</Fragment>
	);
};

export default SecondStepScreen;
