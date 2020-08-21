import { Box, Grid, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import React, { Fragment } from "react";
import { ChipsContainer } from "../../../global/chips";

const EmptyProjectDialogContent = () => {
	return (
		<Fragment>
			<Skeleton
				variant="rect"
				width="100%"
				style={{
					borderRadius: "4px",
					paddingTop: "75%",
					marginBottom: "16px",
				}}
			/>
			<Box paddingX="8px">
				{/* Category */}
				<Box marginBottom="16px">
					<Skeleton
						variant="rect"
						width="120px"
						height="32px"
						style={{ borderRadius: "20px" }}
					/>
				</Box>
				{/* Category END */}
				{/* Description */}
				<Box marginBottom="16px">
					<Typography component="p">
						<Skeleton variant="text" />
						<Skeleton variant="text" />
						<Skeleton variant="text" />
					</Typography>
				</Box>
				{/* Description END */}

				<Grid container spacing={3}>
					{/* Project For */}
					<Grid item xs={12} md={4}>
						<Box textAlign="left">
							<Typography variant="h6" style={{ fontWeight: "400" }}>
								Project For
							</Typography>
							{/* Project Image */}
							<Skeleton
								variant="rect"
								width="100%"
								style={{
									paddingBottom: "75%",
									marginTop: "8px",
									borderRadius: "8px",
								}}
							/>
							{/* Project Image END */}
						</Box>
						{/* Project For END */}
					</Grid>
					{/* Tools */}
					<Grid item xs={12} md={8}>
						<Box textAlign="Left">
							<Box marginBottom="8px">
								<Typography variant="h6" style={{ fontWeight: "400" }}>
									Tools
								</Typography>
							</Box>
							<ChipsContainer>
								{[0, 1, 2, 3, 4].map((data, index) => {
									return (
										<Grid item key={`SkeletonTools${index}`}>
											<Skeleton
												variant="rect"
												width="90px"
												height="32px"
												style={{ borderRadius: "20px" }}
											/>
										</Grid>
									);
								})}
							</ChipsContainer>
						</Box>
					</Grid>
					{/* Tools END */}
				</Grid>
				{/* Links */}
				<div>
					<Box marginTop="16px" marginBottom="8px">
						<Typography variant="h6" style={{ fontWeight: "400" }}>
							Links
						</Typography>
					</Box>
					<ChipsContainer>
						<Skeleton
							variant="rect"
							width="90px"
							height="32px"
							style={{ borderRadius: "20px" }}
						/>
					</ChipsContainer>
				</div>
			</Box>
		</Fragment>
	);
};

export default EmptyProjectDialogContent;
