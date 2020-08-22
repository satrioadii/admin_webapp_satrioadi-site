import { Box, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Pagination } from "@material-ui/lab";
import React, { Fragment, useContext, useEffect } from "react";
import GlobalDialog from "../../components/global/dialog";
import HomeContentCard from "../../components/page/landingpage/content-card";
import HomeContentCardEmpty from "../../components/page/landingpage/content-card/empty-index";
import EmptyProjectDialogContent from "../../components/page/landingpage/project-dialog-content/empty-index";
import {
	LandingPageContextDispatch,
	LandingPageContextState,
} from "../../Providers/Landingpage";
import { SnackbarContextDispatch } from "../../Providers/Snackbar";
import { FetchAllProject } from "../../actions/landingpage/index";
import GlobalDataCounter from "../../components/global/datacounter";

const LandingPage = () => {
	const dispatch = {
		landingPage: useContext(LandingPageContextDispatch),
		snackbar: useContext(SnackbarContextDispatch),
	};
	const state = { landingpage: useContext(LandingPageContextState) };
	const { pagination, data, isLoading, count } = state.landingpage;

	useEffect(() => {
		FetchAllProject(dispatch);
	}, [null]);

	console.log(data);

	return (
		<Fragment>
			<Box marginBottom={{ xs: 3, sm: 4 }}>
				<Typography variant="h5" component="h1">
					Landing Page
				</Typography>
				<GlobalDataCounter total={count} title="Projects" />
			</Box>
			<Box>
				<Grid container spacing={2}>
					{isLoading ? (
						<Fragment>
							<HomeContentCardEmpty />
							<HomeContentCardEmpty />
							<HomeContentCardEmpty />
						</Fragment>
					) : null}
					{data.length > 0
						? data.map((data, index) => {
								return (
									<HomeContentCard
										key={`ProjectCard${index}`}
										Title={data.name}
										Subtitle={data.description}
										ProjectImage={data.image}
										id={data._id}
									/>
								);
						  })
						: null}

					<GlobalDialog Content={<EmptyProjectDialogContent />} />
				</Grid>
			</Box>
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
