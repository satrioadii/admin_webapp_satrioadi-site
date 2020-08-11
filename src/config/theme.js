import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

// Create a theme instance.
const colorSet = createMuiTheme({
	palette: {
		primary: {
			main: "#2188ff",
		},
		secondary: {
			main: "#364f6b",
		},
		text: {
			primary: "#354f6b",
			secondary: "#C3C8D8",
			disabled: "#C3C8D8",
		},
		owndark1: {
			main: "#354f6b",
		},
		owndark2: {
			main: "#202E3E",
		},
		ownlight1: {
			main: "#F6F6F6",
		},
		ownlight2: {
			main: "#FAFAFA",
		},
		owngray1: {
			main: "#C3C8D8",
		},
		owngray2: {
			main: "#B6BBCC",
		},
		background: {
			default: "#fff",
		},
	},
});

const theme = responsiveFontSizes(colorSet);

export default theme;
