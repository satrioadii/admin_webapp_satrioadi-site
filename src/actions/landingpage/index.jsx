import axios from "axios";
import {
	FETCH_LANDING_DATA_REQUEST,
	FETCH_LANDING_DATA_SUCCESS,
	FETCH_LANDING_DATA_ERROR,
} from "../../Providers/Landingpage/index.type";
import { OPEN_SNACKBAR } from "../../Providers/Snackbar/index.type";

const BASE_URL = `${process.env.REACT_APP_HOST_API}/${process.env.REACT_APP_VERSION_1_API}/project`;

const TOKEN = `Bearer ${localStorage.getItem("satrio_admin_token")}`;

export const FetchAllProject = async (dispatch) => {
	dispatch.landingPage({ type: FETCH_LANDING_DATA_REQUEST });

	try {
		const response = await axios({
			method: "get",
			url: `${BASE_URL}?sort=-createdAt`,
			headers: {
				"Content-Type": "application/json",
				authorization: TOKEN,
			},
		});
		dispatch.landingPage({
			type: FETCH_LANDING_DATA_SUCCESS,
			payload: { data: response.data.data },
			pagination: response.data.pagination,
			count: response.data.count,
		});
	} catch (error) {
		console.log(error.response);
		dispatch.landingPage({ type: FETCH_LANDING_DATA_ERROR });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: "Fetch All Project Error",
			snacktype: "error",
		});
	}
};
