import axios from "axios";
import {
	LOGIN_REQUEST,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
} from "../../Providers/Auth/index.type";

const BASE_URL = `${process.env.REACT_APP_HOST_API}/${process.env.REACT_APP_VERSION_1_API}/auth`;
export const LoginAction = async (dispatch, body) => {
	dispatch({ type: LOGIN_REQUEST });
	try {
		const data = await axios({
			method: "post",
			url: `${BASE_URL}/login`,
			headers: {
				"Content-Type": "application/json",
			},
			data: body,
		});
		console.log(data);
		dispatch({ type: LOGIN_SUCCESS, payload: { token: null } });
	} catch (error) {
		console.log("error", error.response.data);
		dispatch({ type: LOGIN_ERROR });
	}
};
