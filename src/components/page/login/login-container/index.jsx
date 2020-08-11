import React from "react";
import { Typography } from "@material-ui/core";

const LoginContainer = ({ children }) => {
	return (
		<div
			style={{
				position: "relative",
				minHeight: "100vh",
				width: "100vw",
				backgroundColor: "#2188ff",
				backgroundImage: "url('./img-login/backgroundImage.jpg')",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<div
				style={{
					height: "100%",
					width: "100%",
					background:
						"linear-gradient(60deg, #11111188 0%, #21a7ff99 60%, #2188ffee 100%)",
				}}
			>
				{children}
				<div
					className="absolute"
					style={{ bottom: "0px", left: "0px", position: "absolute" }}
				>
					<Typography>
						<span style={{ color: "#fff" }}>
							Photo by{" "}
							<a
								style={{ color: "#fff" }}
								href="https://unsplash.com/@peterlaster?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
							>
								Pedro Lastra
							</a>{" "}
							on{" "}
							<a
								style={{ color: "#fff" }}
								href="https://unsplash.com/wallpapers/travel/city?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
							>
								Unsplash
							</a>
						</span>
					</Typography>
				</div>
			</div>
		</div>
	);
};
export default LoginContainer;
