import { Box, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles((theme) => {
	return {
		wrap: {
			backgroundColor: "#fff",
			borderRadius: "8px",
			boxShadow: theme.shadows[23],
			padding: "0",
		},
		welcomeContainer: {
			backgroundImage: "url('./img-login/backgroundImage.jpg')",
			height: "100%",
			backgroundSize: "cover",
			backgroundPosition: "bottom center",
			borderRadius: "8px 8px 0px 0px",
			[theme.breakpoints.up("md")]: {
				borderRadius: "8px 0px 0px 8px",
			},
		},
		welcomeContent: {
			width: "100%",
			height: "100%",
			background: "#2188ffaa",
			borderRadius: "8px 8px 0px 0px",
			[theme.breakpoints.up("md")]: {
				borderRadius: "8px 0px 0px 8px",
			},
		},
	};
});

const LoginContentContainer = ({ children }) => {
	const classes = styles();
	return (
		<Box
			display="flex"
			paddingX={2}
			paddingY={4}
			alignItems="center"
			height="100vh"
		>
			<Container maxWidth="md" className={classes.wrap}>
				<Box display={{ xs: "block", md: "flex" }}>
					<Box width={{ xs: "100%", md: "40%" }}>
						<div className={classes.welcomeContainer}>
							<div className={classes.welcomeContent}>
								<Box padding={{ xs: 2, md: 5 }}>
									<Typography
										variant="h3"
										style={{ color: "#fff", marginBottom: "20px" }}
									>
										Hi, Satrio!
									</Typography>
									<Typography variant="h6" style={{ color: "#fff" }}>
										Life is short. Don't waste your time. What are your agenda
										for today?
									</Typography>
								</Box>
							</div>
						</div>
					</Box>
					<Box paddingY={5} paddingX={3}>
						{children}
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default LoginContentContainer;
