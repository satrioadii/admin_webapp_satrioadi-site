import Typography from "@material-ui/core/Typography";
import React, { Fragment } from "react";
import { Box, Grid } from "@material-ui/core";
import HomeContentCard from "../../components/page/home/content-card";
import HomeContentCardEmpty from "../../components/page/home/content-card/empty-index";
import GlobalDialog from "../../components/global/dialog";
import EmptyProjectDialogContent from "../../components/page/home/project-dialog-content/empty-index";

const HomePage = () => {
	return (
		<Fragment>
			<Box marginBottom={{ xs: 3, sm: 4 }}>
				<Typography variant="h5" component="h1">
					Landing Page
				</Typography>
			</Box>
			<Box>
				<Grid container spacing={2}>
					<HomeContentCard
						Title="Website for My Personal Brand"
						Subtitle="My own website build using Next JS and Material UI with Context API as state management"
						ProjectImage="https://satrioadi.com/img-project/project-1-overview.webp"
					/>
					<HomeContentCardEmpty />
					<HomeContentCardEmpty />
					<HomeContentCardEmpty />
					<GlobalDialog Content={<EmptyProjectDialogContent />} />
				</Grid>
			</Box>
		</Fragment>
	);
};

export default HomePage;
