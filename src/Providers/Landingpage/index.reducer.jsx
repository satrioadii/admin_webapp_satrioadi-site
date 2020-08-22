import {
	FETCH_LANDING_DATA_REQUEST,
	FETCH_LANDING_DATA_SUCCESS,
	FETCH_LANDING_DATA_ERROR,
	FETCH_LANDING_DATA_DETAIL_REQUEST,
	FETCH_LANDING_DATA_DETAIL_SUCCESS,
	FETCH_LANDING_DATA_DETAIL_ERROR,
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
		default:
			return state;
	}
};

export default LandingPageReducer;
