import { Box, Typography, IconButton } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import React, { Fragment, useState, useEffect } from "react";
import { ChipsContainer, CustomChip } from "../../chips";
import { GlobalAutoCompleteForm } from "../index";

const GlobalAutocompleteChipsSelectForm = ({
	value,
	options,
	label,
	name,
	onChange,
	onRefreshData,
}) => {
	const [localState, setLocalState] = useState({
		datas: value.length > 0 ? value : [],
		options: options,
	});

	useEffect(() => {
		setLocalState((current) => ({ ...current, options: options }));
	}, [options]);

	const AddDataHandler = (e) => {
		// ADD NEW datas
		localState.datas.push(e.target.value);

		// Set top variable
		onChange({ target: { name: name, value: localState.datas } });
	};

	const DeleteDataHandler = (label) => {
		// REMOVE SELECTED TOOL
		const newdatas = localState.datas.filter((data) => {
			return data.label !== label;
		});
		setLocalState((current) => ({ ...localState, datas: newdatas }));

		// Set top variable
		onChange({ target: { name: name, value: newdatas } });
	};

	return (
		<Fragment>
			<Box marginBottom="16px">
				<Box textAlign="Left">
					<Box>
						<Typography variant="h6" style={{ fontWeight: "400" }}>
							{label}{" "}
							<IconButton
								color="secondary"
								component="span"
								onClick={() => onRefreshData()}
							>
								<RefreshIcon />
							</IconButton>
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
			</Box>
			<GlobalAutoCompleteForm
				options={localState.options}
				value={null}
				label={label}
				name={name}
				onChange={(e) => AddDataHandler(e)}
				clearOnEscape
			/>
		</Fragment>
	);
};

export default GlobalAutocompleteChipsSelectForm;
