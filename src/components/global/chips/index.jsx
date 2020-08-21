import React, { Fragment } from "react";
import { Chip, Grid } from "@material-ui/core";

export const ChipsContainer = ({ children }) => {
	return (
		<Fragment>
			<Grid container spacing={1}>
				{children}
			</Grid>
		</Fragment>
	);
};

export const CustomChip = ({
	size,
	label,
	color,
	variant,
	link,
	commands,
	newTab,
}) => {
	return (
		<Grid item>
			{link ? (
				<a
					href={link}
					target={newTab ? "_blank" : undefined}
					style={{ textDecoration: "none" }}
				>
					<Chip
						label={label}
						size={size ? size : "medium"}
						color={color ? color : undefined}
						variant={variant ? variant : "default"}
						onClick={() => commands}
					/>
				</a>
			) : (
				<Chip
					label={label}
					size={size ? size : "medium"}
					color={color ? color : undefined}
					variant={variant ? variant : "default"}
				/>
			)}
		</Grid>
	);
};
