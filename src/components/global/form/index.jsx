import {
	Box,
	FormControl,
	InputBase,
	InputLabel,
	OutlinedInput,
	TextField,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React from "react";

export const GlobalTextForm = ({
	name,
	label,
	placeholder,
	onChange,
	value,
	required,
}) => {
	return (
		<Box marginBottom={{ xs: "16px", md: "20px" }}>
			<FormControl
				fullWidth
				variant="outlined"
				required={required ? true : false}
			>
				<InputLabel>{label}</InputLabel>
				<OutlinedInput
					required={required ? true : false}
					name={name}
					label={label}
					placeholder={placeholder}
					onChange={(e) => onChange(e)}
					value={value}
				/>
			</FormControl>
		</Box>
	);
};
export const GlobalTextMultilineForm = ({
	name,
	label,
	placeholder,
	onChange,
	value,
	required,
}) => {
	return (
		<Box marginBottom={{ xs: "16px", md: "20px" }}>
			<TextField
				required={required ? true : false}
				variant="outlined"
				multiline
				fullWidth
				label={label}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</Box>
	);
};

export const GlobalImageForm = ({
	name,
	label,
	onChange,
	value,
	required,
	width,
	paddingTop,
}) => {
	const ImageChangeHandler = (e) => {
		onChange(e);
	};

	return (
		<Box marginBottom={{ xs: "16px", md: "20px" }}>
			<Box marginBottom={{ xs: "8px", sm: "16px" }}>
				<div
					style={{
						width: width,
						paddingTop: paddingTop,
						backgroundColor: " #C3C8D8",
						borderRadius: "16px",
						cursor: "pointer",
						backgroundImage: `url(${value ? value.url : null})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
					}}
				/>
			</Box>
			<InputLabel>{label}</InputLabel>
			<InputBase
				type="file"
				name={name}
				required={required ? true : false}
				onChange={(e) =>
					ImageChangeHandler({
						...e,
						target: {
							name: name,
							value: {
								file: e.target.files[0],
								url: URL.createObjectURL(e.target.files[0]),
							},
						},
					})
				}
			/>
		</Box>
	);
};

export const GlobalAutoCompleteForm = ({
	value,
	options,
	label,
	name,
	onChange,
	clearOnEscape,
}) => {
	const AutocompleteChange = (e, newValue) => {
		onChange({ ...e, target: { ...e.target, name: name, value: newValue } });
	};

	return (
		<Box marginBottom={{ xs: "8px", sm: "16px" }}>
			<Autocomplete
				value={value}
				onChange={(e, newValue) => AutocompleteChange(e, newValue)}
				options={options}
				clearOnEscape={clearOnEscape ? true : false}
				getOptionLabel={(option) => option.label}
				renderInput={(params) => (
					<TextField
						{...params}
						label={label}
						variant="outlined"
						fullWidth
						name={name}
					/>
				)}
			/>
		</Box>
	);
};
