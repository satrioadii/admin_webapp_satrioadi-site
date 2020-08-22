import React from "react";
import { makeStyles, Grid, Typography, Box } from "@material-ui/core";
import { OpenDialogAction } from "../../../../actions/dialog";
import { useContext } from "react";
import { DialogContextDispatch } from "../../../../Providers/Dialog";

const styles = makeStyles((theme) => {
	return {
		contentTitle: {
			fontWeight: "500 !important",
			cursor: "pointer",
			lineHeight: "1.3",
		},
		contentSubtitle: {
			fontWeight: "400 !important",
			cursor: "pointer",
		},
	};
});

const HomeContentCard = ({ Title, Subtitle, ProjectImage }) => {
	const dispatch = useContext(DialogContextDispatch);
	const classes = styles();
	const onOpenDialogHandler = () => {
		OpenDialogAction(dispatch);
	};

	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<div
				onClick={() => onOpenDialogHandler()}
				style={{
					width: "100%",
					paddingTop: "133%",
					backgroundColor: " #C3C8D8",
					borderRadius: "16px",
					cursor: "pointer",
					backgroundImage: `url(${ProjectImage})`,
					backgroundSize: "cover",
				}}
			></div>
			<Box paddingX="4px">
				<Box marginTop="8px" marginBottom="4px">
					<Typography
						onClick={() => onOpenDialogHandler()}
						variant="h6"
						component="p"
						className={classes.contentTitle}
					>
						{Title}
					</Typography>
				</Box>
				<Typography
					onClick={() => onOpenDialogHandler()}
					component="p"
					color="textSecondary"
					className={classes.contentSubtitle}
				>
					{Subtitle}
				</Typography>
			</Box>
		</Grid>
	);
};

export default HomeContentCard;
