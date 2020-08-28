import { Box, Typography, Button } from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { ChipsContainer, CustomChip } from "../../chips";
import { GlobalAutoCompleteForm, GlobalTextForm } from "../index";

const GlobalAutocompleteChipsAddForm = ({
	value,
	label,
	name,
	onChange,
	variant,
}) => {
	const [localState, setLocalState] = useState({
		datas: value.length > 0 ? value : [],
		variant: ["outlined", "default"],
		color: [{ label: "primary" }, { label: "secondary" }],
		temporary: {
			color: null,
			label: "",
			link: "",
			variant: "",
		},
	});

	const AddDataHandler = (e) => {
		// ADD NEW datas
		const toPushData = {
			...localState.temporary,
			color: localState.temporary.color.label,
			variant: variant,
		};
		localState.datas.push(toPushData);
		setLocalState({
			...localState,
			temporary: {
				color: null,
				label: "",
				link: "",
				variant: variant,
			},
		});

		// Set top variable
		onChange({ target: { name: name, value: localState.datas } });
	};

	const DeleteDataHandler = (label) => {
		// REMOVE SELECTED DATA
		const newdatas = localState.datas.filter((data) => {
			return data.label !== label;
		});
		setLocalState({ ...localState, datas: newdatas });

		// Set top variable
		onChange({ target: { name: name, value: newdatas } });
	};

	const ChipsDataHandler = (e) => {
		if (e.target.name === "color") {
			return setLocalState({
				...localState,
				temporary: {
					...localState.temporary,
					[e.target.name]: e.target.value,
				},
			});
		}

		setLocalState({
			...localState,
			temporary: {
				...localState.temporary,
				[e.target.name]: e.target.value,
			},
		});
	};

	return (
		<Fragment>
			<div>
				<Box textAlign="Left">
					<Box marginBottom="8px">
						<Typography variant="h6" style={{ fontWeight: "400" }}>
							{label}
						</Typography>
					</Box>
					<ChipsContainer>
						{localState.datas.map((data, index) => {
							return (
								<CustomChip
									key={`projectTool-${index}`}
									{...data}
									onDelete={(label) => DeleteDataHandler(label)}
								/>
							);
						})}
					</ChipsContainer>
				</Box>
			</div>
			<Box
				display={{ xs: "block", md: "flex" }}
				justifyContent="space-between"
				marginTop={{ xs: "8px", md: "16px" }}
			>
				<Box flex={1} marginRight={{ xs: "0px", md: "4px" }}>
					<GlobalTextForm
						required
						name="label"
						label="label"
						placeholder="Enter the label"
						value={localState.temporary.label}
						onChange={(e) => ChipsDataHandler(e)}
					/>
				</Box>
				<Box flex={1} marginLeft={{ xs: "0px", md: "4px" }}>
					<GlobalAutoCompleteForm
						options={localState.color}
						value={localState.temporary.color}
						label="Select color"
						name="color"
						onChange={(e) => ChipsDataHandler(e)}
					/>
				</Box>
			</Box>
			<GlobalTextForm
				required
				name="link"
				label="link"
				placeholder="Enter the link"
				value={localState.temporary.link}
				onChange={(e) => ChipsDataHandler(e)}
			/>
			<Box marginBottom={{ xs: "8px", sm: "16px" }}>
				<Button variant="outlined" color="primary" onClick={AddDataHandler}>
					Add Chips
				</Button>
			</Box>
		</Fragment>
	);
};

export default GlobalAutocompleteChipsAddForm;
