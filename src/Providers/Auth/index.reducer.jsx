import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	CHECK_AUTH_REQUEST,
	CHECK_AUTH_SUCCESS,
	CHECK_AUTH_ERROR,
	LOGOUT_REQUEST,
} from "./index.type";

const AuthReducer = (state, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return { ...state, isLoading: true };
		case LOGIN_SUCCESS:
			localStorage.setItem("satrio_admin_token", action.payload.token);
			return {
				...state,
				isLoading: false,
				token: `Bearer ${action.payload.token}`,
			};
		case CHECK_AUTH_REQUEST:
			return { ...state, isLoading: true };
		case CHECK_AUTH_SUCCESS:
			return { ...state, isLoading: false, user: action.payload.role };
		case LOGIN_ERROR:
		case CHECK_AUTH_ERROR:
		case LOGOUT_REQUEST:
			localStorage.removeItem("satrio_admin_token");
			return { ...state, isLoading: false, token: null };
		default:
			return state;
	}
};

export default AuthReducer;
