import { IUserAction, IUserState, UserActionTypes } from '../../types/user'

const initialState: IUserState = {
	users: [],
	loading: false,
	error: null,
}

export const userReducer = (
	state = initialState,
	action: IUserAction
): IUserState => {
	switch (action.type) {
		case UserActionTypes.FETCH_USERS:
			return { error: null, loading: true, users: [] }
		case UserActionTypes.FETCH_USERS_SUCCESS:
			return { error: null, loading: false, users: action.payload }
		case UserActionTypes.FETCH_USERS_ERROR:
			return { error: action.payload, loading: false, users: [] }
		default:
			return state
	}
}
