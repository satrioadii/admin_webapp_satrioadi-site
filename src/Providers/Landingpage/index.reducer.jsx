import {
	FETCH_DATA_REQUEST,
	FETCH_DATA_SUCCESS,
	FETCH_DATA_ERROR,
	FETCH_DATA_DETAIL_REQUEST,
	FETCH_DATA_DETAIL_SUCCESS,
	FETCH_DATA_DETAIL_ERROR,
	CHANGE_DATA_REQUEST,
	CHANGE_DATA_SUCCESS,
	CHANGE_DATA_ERROR,
} from "./index.type";

const LandingPageReducer = (state, action) => {
	switch (action.type) {
		case FETCH_DATA_REQUEST:
			return { ...state, isLoading: true, data: action.payload.data };
		case FETCH_DATA_SUCCESS:
			return { ...state, isLoading: false, message: action.payload.data };
		case FETCH_DATA_ERROR:
			return { ...state, isLoading: false, message: action.payload.datat };
		default:
			return state;
	}
};

export default LandingPageReducer;
