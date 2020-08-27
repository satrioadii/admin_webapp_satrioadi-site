import React, { Fragment } from "react";
import {
	GlobalImageForm,
	GlobalTextForm,
	GlobalTextMultilineForm,
} from "../../../global/form";

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

export default FirstStepScreen;
