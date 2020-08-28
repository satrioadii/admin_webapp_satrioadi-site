import {
	FETCH_LANDING_DATA_REQUEST,
	FETCH_LANDING_DATA_SUCCESS,
	FETCH_LANDING_DATA_ERROR,
	FETCH_LANDING_DATA_DETAIL_REQUEST,
	FETCH_LANDING_DATA_DETAIL_SUCCESS,
	FETCH_LANDING_DATA_DETAIL_ERROR,
	FETCH_LANDING_TOOLS_DATA_REQUEST,
	FETCH_LANDING_TOOLS_DATA_SUCCESS,
	FETCH_LANDING_TOOLS_DATA_ERROR,
	CHANGE_LANDING_DATA_REQUEST,
	CHANGE_LANDING_DATA_SUCCESS,
	CHANGE_LANDING_DATA_ERROR,
} from "./index.type";

const LandingPageReducer = (state, action) => {
	switch (action.type) {
		case FETCH_LANDING_DATA_REQUEST:
			return { ...state, isLoading: true };
		case FETCH_LANDING_DATA_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: action.payload.data,
				pagination: action.pagination,
				count: action.count,
			};
		case FETCH_LANDING_DATA_ERROR:
			return { ...state, isLoading: false };
		case FETCH_LANDING_DATA_DETAIL_REQUEST:
			return { ...state, isLoading: true };
		case FETCH_LANDING_DATA_DETAIL_SUCCESS:
			return {
				...state,
				isLoading: false,
				dataDetail: action.payload.data,
			};
		case FETCH_LANDING_DATA_DETAIL_ERROR:
			return { ...state, isLoading: false };
		case FETCH_LANDING_TOOLS_DATA_REQUEST:
			return { ...state, tools: [{ label: "loading" }] };
		case FETCH_LANDING_TOOLS_DATA_SUCCESS:
			localStorage.setItem("admin_satrio_tools", JSON.stringify(action.tools));
			return { ...state, tools: action.tools };
		case FETCH_LANDING_TOOLS_DATA_ERROR:
			return { ...state, tools: [{ label: "error, please try again" }] };
		case CHANGE_LANDING_DATA_REQUEST:
			return { ...state, isLoading: true };
		case CHANGE_LANDING_DATA_SUCCESS:
			return { ...state, isLoading: false };
		case CHANGE_LANDING_DATA_ERROR:
			return { ...state, isLoading: false };
		default:
			return state;
	}
};

export default LandingPageReducer;
