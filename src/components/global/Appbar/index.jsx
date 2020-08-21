import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useContext, Fragment } from "react";
import {
	AppbarContextDispatch,
	AppbarContextState,
} from "../../../Providers/Appbar";
import {
	CLOSE_APPBAR,
	OPEN_APPBAR,
} from "../../../Providers/Appbar/index.type";

const useStyles = makeStyles((theme) => ({
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	menuButton: {
		marginRight: 20,
	},
}));

const GlobalAppBar = () => {
	const classes = useStyles();
	const state = useContext(AppbarContextState);
	const dispatch = useContext(AppbarContextDispatch);

	const handleDrawerOpen = () => {
		dispatch({ type: OPEN_APPBAR });
	};

	const handleDrawerClose = () => {
		dispatch({ type: CLOSE_APPBAR });
	};

	return (
		<Fragment>
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={state.isOpen ? handleDrawerClose : handleDrawerOpen}
						edge="start"
						className={classes.menuButton}
					>
						{state.isOpen ? <ChevronLeftIcon /> : <MenuIcon />}
					</IconButton>
					<Typography variant="h6" noWrap>
						satrioadi.com
					</Typography>
				</Toolbar>
			</AppBar>
		</Fragment>
	);
};

export default GlobalAppBar;
