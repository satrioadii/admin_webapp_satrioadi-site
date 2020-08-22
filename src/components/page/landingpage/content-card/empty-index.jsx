import React from "react";
import { makeStyles, Grid, Typography, Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const styles = makeStyles((theme) => {
	return {
		contentTitle: {
			fontWeight: "500 !important",
			cursor: "pointer",
			lineHeight: "1.1",
		},
		contentSubtitle: {
			fontWeight: "400 !important",
			cursor: "pointer",
		},
	};
});

const HomeContentCardEmpty = ({ Title, Subtitle, ProjectImage }) => {
	const classes = styles();

	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Skeleton
				variant="rect"
				animation="pulse"
				width="100%"
				style={{ paddingTop: "133%", cursor: "pointer", borderRadius: "16px" }}
			/>
			<Box paddingX="4px">
				<Box marginTop="8px" marginBottom="4px">
					<Typography
						variant="h4"
						component="p"
						className={classes.contentTitle}
					>
						<Skeleton />
					</Typography>
				</Box>
				<Typography
					component="p"
					color="textSecondary"
					className={classes.contentSubtitle}
				>
					<Skeleton />
					<Skeleton style={{ width: "50%" }} />
				</Typography>
			</Box>
		</Grid>
	);
};

export default HomeContentCardEmpty;
