import { Box, Chip, Grid, Typography } from "@material-ui/core";
import React, { Fragment, useContext } from "react";
import { LandingPageContextState } from "../../../../Providers/Landingpage";
import { ChipsContainer, CustomChip } from "../../../global/chips";
import EmptyProjectDialogContent from "./empty-index";
import GlobalWidthMax from "../../../global/widthmax";

const ProjectDialogContent = () => {
	const state = { landingPage: useContext(LandingPageContextState) };
	const { isLoading, dataDetail } = state.landingPage;
	const fileServerAPI = process.env.REACT_APP_FILE_SERVER_API;

	if (isLoading) {
		return <EmptyProjectDialogContent />;
	}

	return (
		<Fragment>
			<GlobalWidthMax />
			{isLoading ? null : (
				<div
					style={{
						width: "100%",
						paddingTop: "75%",
						backgroundColor: " #C3C8D8",
						backgroundImage: `url("${
							dataDetail ? `${fileServerAPI}/${dataDetail.modalImage}` : null
						}")`,
						borderRadius: "4px",
						marginBottom: "16px",
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}
				></div>
			)}

			<Box paddingX="8px">
				{/* Category */}
				<Box marginBottom="16px">
					{isLoading ? null : (
						<Chip
							label={dataDetail.category}
							variant="outlined"
							color="primary"
						/>
					)}
				</Box>
				{/* Description */}
				<Box marginBottom="16px">
					<Typography component="p">
						{isLoading ? null : dataDetail.description}
					</Typography>
				</Box>
				<Grid container spacing={3}>
					{/* Project FOR */}
					<Grid item xs={12} md={4}>
						<Box textAlign="left">
							<Typography variant="h6" style={{ fontWeight: "400" }}>
								Project For
							</Typography>
							{/* Project Image */}
							{isLoading ? null : (
								<div
									style={{
										width: "100%",
										marginTop: "8px",
										paddingBottom: "75%",
										backgroundImage: `url("${
											dataDetail
												? `${fileServerAPI}/${dataDetail.organizationImage}`
												: null
										}")`,
										backgroundSize: "cover",
										backgroundRepeat: "none",
										backgroundPosition: "center",
										borderRadius: "8px",
									}}
								/>
							)}
						</Box>
					</Grid>
					{/* Tools */}
					{dataDetail.tools ? (
						<Grid item xs={12} md={8}>
							<Box textAlign="Left">
								<Box marginBottom="8px">
									<Typography variant="h6" style={{ fontWeight: "400" }}>
										Tools
									</Typography>
								</Box>
								<ChipsContainer>
									{isLoading
										? null
										: dataDetail.tools.map((dataTool, index) => {
												return (
													<CustomChip
														key={`projectTool-${index}`}
														{...dataTool}
													/>
												);
										  })}
								</ChipsContainer>
							</Box>
						</Grid>
					) : null}
				</Grid>
				{/* Links */}
				{dataDetail.links ? (
					<div>
						<Box marginTop="16px" marginBottom="8px">
							<Typography variant="h6" style={{ fontWeight: "400" }}>
								Links
							</Typography>
						</Box>
						<ChipsContainer>
							{isLoading
								? null
								: dataDetail.links.map((dataLink, index) => {
										return (
											<CustomChip key={`projectLink-${index}`} {...dataLink} />
										);
								  })}
						</ChipsContainer>
					</div>
				) : null}
			</Box>
		</Fragment>
	);
};

export default ProjectDialogContent;
