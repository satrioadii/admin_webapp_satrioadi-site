import { Box, Typography } from "@material-ui/core";
import React, { Fragment } from "react";

const ThirdStepScreen = ({ stepScreen, step }) => {
	return (
		<Fragment>
			{stepScreen === step ? (
				<Fragment>
					<Box marginY={{ xs: "16px", md: "24px" }} justifyContent="center">
						<Typography variant="h5" justifyContent="center" align="center">
							Project Updated!
						</Typography>
					</Box>
				</Fragment>
			) : null}
		</Fragment>
	);
};

export default ThirdStepScreen;
