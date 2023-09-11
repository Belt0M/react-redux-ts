export interface IUser {
	id: number
	name: string
	username: string
	email: string
	address: {
		street: string
		suite: string
		city: string
		zipcode: string
		geo: {
			lat: string
			lng: string
		}
	}
	phone: string
	website: string
	company: {
		name: string
		catchPhrase: string
		bs: string
	}
}

export interface IUserState {
	users: IUser[]
	loading: boolean
	error: null | string
}

export enum UserActionTypes {
	FETCH_USERS = 'FETCH_USERS',
	FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
	FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface IFetchUsersAction {
	type: UserActionTypes.FETCH_USERS
}

interface IFetchUsersSuccessAction {
	type: UserActionTypes.FETCH_USERS_SUCCESS
	payload: IUser[]
}

interface IFetchUsersErrorAction {
	type: UserActionTypes.FETCH_USERS_ERROR
	payload: string
}

export type IUserAction =
	| IFetchUsersAction
	| IFetchUsersSuccessAction
	| IFetchUsersErrorAction
