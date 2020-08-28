import axios from "axios";
import {
	CHANGE_LANDING_DATA_ERROR,
	CHANGE_LANDING_DATA_REQUEST,
	CHANGE_LANDING_DATA_SUCCESS,
	FETCH_LANDING_DATA_DETAIL_ERROR,
	FETCH_LANDING_DATA_DETAIL_REQUEST,
	FETCH_LANDING_DATA_DETAIL_SUCCESS,
	FETCH_LANDING_DATA_ERROR,
	FETCH_LANDING_DATA_REQUEST,
	FETCH_LANDING_DATA_SUCCESS,
	FETCH_LANDING_TOOLS_DATA_ERROR,
	FETCH_LANDING_TOOLS_DATA_REQUEST,
	FETCH_LANDING_TOOLS_DATA_SUCCESS,
} from "../../Providers/Landingpage/index.type";
import { OPEN_SNACKBAR } from "../../Providers/Snackbar/index.type";
import { objToString } from "../../utils/objectHandler";

const TOKEN = `${localStorage.getItem("satrio_admin_token")}`;
const BASE_URL_PROJECT = `${process.env.REACT_APP_HOST_API}/${process.env.REACT_APP_VERSION_1_API}/project`;
export const FetchAllProject = async (dispatch) => {
	dispatch.landingPage({ type: FETCH_LANDING_DATA_REQUEST });

	try {
		const response = await axios({
			method: "get",
			url: `${BASE_URL_PROJECT}?sort=-createdAt`,
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

export const FetchDetailProject = async (dispatch, id) => {
	dispatch.landingPage({ type: FETCH_LANDING_DATA_DETAIL_REQUEST });

	try {
		const response = await axios({
			method: "get",
			url: `${BASE_URL_PROJECT}/${id}`,
			headers: {
				"Content-Type": "application/json",
				authorization: TOKEN,
			},
		});
		dispatch.landingPage({
			type: FETCH_LANDING_DATA_DETAIL_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		console.log(error.response);
		dispatch.landingPage({ type: FETCH_LANDING_DATA_DETAIL_ERROR });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: "Fetch Project Detail Error",
			snacktype: "error",
		});
	}
};

export const CreateProject = async (dispatch, data) => {
	// Convert object content to string
	const newObj = objToString(data, ["links", "tools"]);

	let formData = new FormData();
	Object.entries(newObj).forEach(([key, val]) => formData.append(key, val));

	dispatch.landingPage({ type: CHANGE_LANDING_DATA_REQUEST });

	try {
		await axios.post(`${BASE_URL_PROJECT}/`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: TOKEN,
			},
		});

		dispatch.landingPage({ type: CHANGE_LANDING_DATA_SUCCESS });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: "New project created",
			snacktype: "success",
		});

		return true;
	} catch (error) {
		console.log(error.response);
		dispatch.landingPage({ type: CHANGE_LANDING_DATA_ERROR });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: "Create project failed",
			snacktype: "error",
		});
		return false;
	}
};

export const UpdateProject = async (dispatch, data, id) => {
	// Convert object content to string
	const newObj = objToString(data, ["links", "tools"]);

	let formData = new FormData();
	Object.entries(newObj).forEach(([key, val]) => formData.append(key, val));

	dispatch.landingPage({ type: CHANGE_LANDING_DATA_REQUEST });

	try {
		await axios.put(`${BASE_URL_PROJECT}/${id}`, formData, {
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: TOKEN,
			},
		});

		dispatch.landingPage({ type: CHANGE_LANDING_DATA_SUCCESS });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: "Project updated!",
			snacktype: "success",
		});

		return true;
	} catch (error) {
		console.log(error.response);
		dispatch.landingPage({ type: CHANGE_LANDING_DATA_ERROR });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: "Update project failed",
			snacktype: "error",
		});
		return false;
	}
};

export const DeleteProject = async (dispatch, id) => {
	try {
		await axios({
			method: "delete",
			url: `${BASE_URL_PROJECT}/${id}`,
			headers: {
				"Content-Type": "application/json",
				authorization: TOKEN,
			},
		});

		dispatch.landingPage({ type: CHANGE_LANDING_DATA_SUCCESS });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: "Project deleted",
			snacktype: "success",
		});
		return true;
	} catch (error) {
		console.log(error.response);
		dispatch.landingPage({ type: CHANGE_LANDING_DATA_ERROR });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: "Delete project failed",
			snacktype: "error",
		});
		return false;
	}
};

const BASE_URL_TOOL = `${process.env.REACT_APP_HOST_API}/${process.env.REACT_APP_VERSION_1_API}/tool`;
export const FetchAllTool = async (dispatch) => {
	dispatch.landingPage({ type: FETCH_LANDING_TOOLS_DATA_REQUEST });

	try {
		const response = await axios({
			method: "get",
			url: `${BASE_URL_TOOL}?sort=-createdAt&limit=100`,
			headers: {
				"Content-Type": "application/json",
				authorization: TOKEN,
			},
		});
		dispatch.landingPage({
			type: FETCH_LANDING_TOOLS_DATA_SUCCESS,
			tools: response.data.data,
		});
	} catch (error) {
		dispatch.landingPage({ type: FETCH_LANDING_TOOLS_DATA_ERROR });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: "Fetch All Tools Error",
			snacktype: "error",
		});
	}
};

export const CreateTool = async (dispatch, data) => {
	try {
		await axios({
			method: "post",
			url: `${BASE_URL_TOOL}/`,
			headers: {
				"Content-Type": "application/json",
				authorization: TOKEN,
			},
			data: data,
		});

		dispatch.landingPage({ type: CHANGE_LANDING_DATA_SUCCESS });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: `Tool ${data.label} created`,
			snacktype: "success",
		});
		return true;
	} catch (error) {
		console.log(error.response);
		dispatch.landingPage({ type: CHANGE_LANDING_DATA_ERROR });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: "Failed to create a tool",
			snacktype: "error",
		});
		return false;
	}
};
