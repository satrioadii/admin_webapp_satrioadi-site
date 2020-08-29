import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	CHECK_AUTH_REQUEST,
	CHECK_AUTH_SUCCESS,
	CHECK_AUTH_ERROR,
	LOGOUT_REQUEST,
} from "./index.type";
import { RemoveCookie } from "../../utils/cookiesHandler";

const AuthReducer = (state, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
		case CHECK_AUTH_REQUEST:
			return { ...state, isLoading: true };
		case CHECK_AUTH_SUCCESS:
			return {
				...state,
				isLoading: false,
				token: action.payload,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				token: action.payload,
				role: action.role,
			};
		case CHECK_AUTH_ERROR:
		case LOGIN_ERROR:
		case LOGOUT_REQUEST:
			RemoveCookie("satrio_admin_token");
			return { ...state, isLoading: false, token: null };
		default:
			return state;
	}
};

export default AuthReducer;
