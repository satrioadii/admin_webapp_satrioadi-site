import axios from "axios";
import {
	LOGIN_REQUEST,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	LOGOUT_REQUEST,
	CHECK_AUTH_REQUEST,
	CHECK_AUTH_ERROR,
	CHECK_AUTH_SUCCESS,
} from "../../Providers/Auth/index.type";
import { OPEN_SNACKBAR } from "../../Providers/Snackbar/index.type";
import { SetCookie, GetCookie } from "../../utils/cookiesHandler";

const BASE_URL = `${process.env.REACT_APP_HOST_API}/${process.env.REACT_APP_VERSION_1_API}/auth`;

export const LoginAction = async (dispatch, body) => {
	dispatch.auth({ type: LOGIN_REQUEST });
	try {
		const response = await axios({
			method: "post",
			url: `${BASE_URL}/login`,
			headers: {
				"Content-Type": "application/json",
			},
			data: body,
		});

		SetCookie("satrio_admin_token", `Bearer ${response.data.token}`);

		await dispatch.auth({
			type: LOGIN_SUCCESS,
			payload: `Bearer ${response.data.token}`,
		});
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: "Login Success",
			snacktype: "success",
		});
	} catch (error) {
		console.log("error", error.response.data);
		dispatch.auth({ type: LOGIN_ERROR });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: `Login failed: ${JSON.stringify(error.response.data)}`,
			snacktype: "error",
		});
	}
};

export const LogoutAction = async (dispatch) => {
	dispatch.auth({ type: LOGOUT_REQUEST });
};

export const CheckAuthAction = async (dispatch, token) => {
	dispatch.auth({ type: CHECK_AUTH_REQUEST });

	try {
		const response = await axios({
			method: "get",
			url: `${BASE_URL}/me`,
			headers: {
				"Content-Type": "application/json",
				Authorization: token,
			},
		});
		SetCookie("satrio_admin_token", token);
		const newData = SetCookie("satrio_admin_role", response.data.data.role);

		dispatch.auth({
			type: CHECK_AUTH_SUCCESS,
			payload: token,
			role: response.data.data.role,
		});
		return true;
	} catch (error) {
		console.log("error", error.response.data);
		dispatch.auth({ type: CHECK_AUTH_ERROR });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: `Not recognized. Please login again`,
			snacktype: "error",
		});
		return false;
	}
};
