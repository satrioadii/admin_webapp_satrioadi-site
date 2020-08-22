import React from "react";
import { useTheme, Box, Typography } from "@material-ui/core";

const GlobalDataCounter = ({ title, total }) => {
	const theme = useTheme();

	return (
		<Box marginTop={{ xs: "8px", sm: "16px" }}>
			<div
				style={{
					borderRadius: "8px",
					border: `1px solid ${theme.palette.owngray1.main}`,
					padding: "12px 0",
					display: "inline-block",
				}}
			>
				<Box paddingX="16px" textAlign="center" paddingY="4px">
					<Typography variant="h6" component="p" style={{ cursor: "pointer" }}>
						<span
							style={{
								fontWeight: "500",
								color: theme.palette.primary.main,
							}}
						>
							{total}
						</span>{" "}
						<span
							style={{
								fontWeight: "500",
								color: theme.palette.text.main,
							}}
						>
							{title}
						</span>
					</Typography>
				</Box>
			</div>
		</Box>
	);
};

export default GlobalDataCounter;
