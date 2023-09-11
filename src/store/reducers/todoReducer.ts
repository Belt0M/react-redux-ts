import { ETodoActionTypes, ITodoState, TodoActions } from '../../types/todo'

const initialState: ITodoState = {
	todos: [],
	error: null,
	loading: false,
	limit: 10,
	page: 1,
}

export const todoReducer = (
	state = initialState,
	action: TodoActions
): ITodoState => {
	switch (action.type) {
		case ETodoActionTypes.FETCH_TODOS:
			return { ...state, loading: true }
		case ETodoActionTypes.FETCH_TODOS_SUCCESS:
			return { ...state, loading: false, todos: action.payload }
		case ETodoActionTypes.FETCH_TODOS_ERROR:
			return { ...state, loading: false, error: action.payload }
		case ETodoActionTypes.SET_TODO_PAGE:
			return { ...state, page: action.payload }
		default:
			return state
	}
}
