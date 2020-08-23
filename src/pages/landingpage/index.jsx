import { Box, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Pagination } from "@material-ui/lab";
import React, { Fragment, useContext, useEffect } from "react";
import { FetchAllProject } from "../../actions/landingpage/index";
import GlobalDataCounter from "../../components/global/datacounter";
import HomeAddProjectButton from "../../components/page/landingpage/add-project-button";
import HomeContentCard from "../../components/page/landingpage/content-card";
import HomeContentCardEmpty from "../../components/page/landingpage/content-card/empty-index";
import { DialogContextDispatch } from "../../Providers/Dialog";
import {
	LandingPageContextDispatch,
	LandingPageContextState,
} from "../../Providers/Landingpage";
import { SnackbarContextDispatch } from "../../Providers/Snackbar";

const LandingPage = () => {
	const dispatch = {
		landingPage: useContext(LandingPageContextDispatch),
		snackbar: useContext(SnackbarContextDispatch),
		dialog: useContext(DialogContextDispatch),
	};
	const state = { landingpage: useContext(LandingPageContextState) };
	const { pagination, data, isLoading, count } = state.landingpage;

	useEffect(() => {
		FetchAllProject(dispatch);
	}, []);

	return (
		<Fragment>
			<Box marginBottom={{ xs: 3, sm: 4 }}>
				<Typography variant="h5" component="h1">
					Landing Page
				</Typography>

				<Box
					display={{ xs: "block", md: "flex" }}
					flexDirection="row"
					justifyContent="space-between"
					alignItems="center"
				>
					<GlobalDataCounter total={count} title="Projects" />
					<Box marginTop={{ xs: "16px", md: "0px" }}>
						<HomeAddProjectButton />
					</Box>
				</Box>
			</Box>

			<Box marginTop={{ xs: 3, sm: 4 }}>
				<Grid container spacing={2}>
					{/* PROJECT CARD */}
					{data.length > 0 ? (
						data.map((data, index) => {
							return (
								<HomeContentCard
									key={`ProjectCard${index}`}
									Title={data.name}
									Subtitle={data.description}
									ProjectImage={data.image}
									Id={data._id}
								/>
							);
						})
					) : isLoading ? (
						<Fragment>
							<HomeContentCardEmpty />
							<HomeContentCardEmpty />
							<HomeContentCardEmpty />
						</Fragment>
					) : null}
				</Grid>
			</Box>
			{/* PAGINATION */}
			<Box
				marginTop={{ xs: "16px", sm: "24px" }}
				marginBottom="16px"
				display="flex"
				flexDirection="row-reverse"
			>
				<Pagination count={pagination.total} />
			</Box>
		</Fragment>
	);
};

export default LandingPage;
