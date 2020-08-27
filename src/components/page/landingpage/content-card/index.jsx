import React from "react";
import { makeStyles, Grid, Typography, Box, Button } from "@material-ui/core";
import { OpenDialogAction } from "../../../../actions/dialog";
import { useContext } from "react";
import { DialogContextDispatch } from "../../../../Providers/Dialog";
import {
	FetchDetailProject,
	DeleteProject,
	FetchAllProject,
} from "../../../../actions/landingpage";
import { SnackbarContextDispatch } from "../../../../Providers/Snackbar";
import { LandingPageContextDispatch } from "../../../../Providers/Landingpage";
import ProjectDialogContent from "../project-dialog-content";
import GlobalWidthMax from "../../../global/widthmax";
import GlobalDeleteDialog from "../../../global/dialog/index.delete";

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

const HomeContentCard = ({ Title, Subtitle, ProjectImage, Id }) => {
	const dispatch = {
		dialog: useContext(DialogContextDispatch),
		snackbar: useContext(SnackbarContextDispatch),
		landingPage: useContext(LandingPageContextDispatch),
	};
	const classes = styles();

	const fileServerAPI = process.env.REACT_APP_FILE_SERVER_API;

	const onOpenDialogHandler = () => {
		OpenDialogAction(dispatch, Title, ProjectDialogContent);
		FetchDetailProject(dispatch, Id);
	};

	const onDeleteCaller = async () => {
		OpenDialogAction(dispatch, "Delete A Project", () => (
			<GlobalDeleteDialog onAccept={() => onDeleteAccept()} />
		));
	};

	const onDeleteAccept = async () => {
		const response = await DeleteProject(dispatch, Id);
		if (response) {
			FetchAllProject(dispatch);
		}
	};

	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<div style={{ position: "relative" }}>
				<div
					onClick={() => onOpenDialogHandler()}
					style={{
						width: "100%",
						paddingTop: "133%",
						backgroundColor: " #C3C8D8",
						borderRadius: "16px",
						cursor: "pointer",
						backgroundImage: `url("${fileServerAPI}/${ProjectImage}")`,
						backgroundSize: "cover",
						position: "relative",
					}}
				></div>
				<Box position="absolute" top="0px" right="0px">
					<Button
						size="small"
						variant="contained"
						color="secondary"
						disableElevation
						onClick={() => onDeleteCaller()}
					>
						Delete
					</Button>
				</Box>
			</div>
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
