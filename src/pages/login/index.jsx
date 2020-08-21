import { Box, Button, TextField, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import LoginContentContainer from "../../components/page/login/content-container";
import LoginContainer from "../../components/page/login/login-container";

const LoginPage = () => {
	const history = useHistory();

	const [data, setData] = useState({ email: "", password: "" });

	const HandleChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const Submit = (e) => {
		e.preventDefault();
		history.push("/");
	};

	return (
		<LoginContainer>
			<LoginContentContainer>
				<Box marginBottom="24px" display="flex" alignItems="center">
					<div
						style={{
							backgroundColor: "#2188ff",
							height: "40px",
							width: "40px",
							marginRight: "8px",
							backgroundImage: "url('./img-head/apple-touch-icon-144x144.png')",
							backgroundSize: "cover",
							backgroundPosition: "center",
							borderRadius: "8px",
						}}
					></div>
					<Typography variant="h5" style={{ fontWeight: "400" }}>
						satrioadi.com
					</Typography>
				</Box>
				<Typography style={{ marginBottom: "16px" }}>Login</Typography>
				<form onSubmit={Submit} noValidate autoComplete="off">
					<TextField
						id="emailField"
						name="email"
						type="email"
						label="email"
						fullWidth
						variant="outlined"
						size="small"
						value={data.email}
						onChange={(e) => HandleChange(e)}
						style={{ marginBottom: "24px" }}
					/>
					<TextField
						id="passwordField"
						name="password"
						type="password"
						label="password"
						fullWidth
						variant="outlined"
						size="small"
						value={data.password}
						onChange={(e) => HandleChange(e)}
						style={{ marginBottom: "24px" }}
					/>
					<Button
						type="submit"
						variant="contained"
						color="primary"
						disableElevation
						fullWidth
						onClick={Submit}
					>
						Login
					</Button>
				</form>
			</LoginContentContainer>
		</LoginContainer>
	);
};

export default LoginPage;
