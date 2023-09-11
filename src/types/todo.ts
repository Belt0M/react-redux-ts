interface ITodo {
	userId: number
	id: number
	title: string
	completed: boolean
}

export interface ITodoState {
	todos: ITodo[]
	error: null | string
	loading: boolean
	limit: number
	page: number
}

export enum ETodoActionTypes {
	FETCH_TODOS = 'FETCH_TODOS',
	FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
	FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
	SET_TODO_PAGE = 'SET_TODO_PAGE',
}

interface IFetchTodosAction {
	type: ETodoActionTypes.FETCH_TODOS
}

interface IFetchTodosActionSuccess {
	type: ETodoActionTypes.FETCH_TODOS_SUCCESS
	payload: ITodo[]
}

interface IFetchTodosActionError {
	type: ETodoActionTypes.FETCH_TODOS_ERROR
	payload: string
}

interface ISetTodoPage {
	type: ETodoActionTypes.SET_TODO_PAGE
	payload: number
}

export type TodoActions =
	| IFetchTodosAction
	| IFetchTodosActionSuccess
	| IFetchTodosActionError
	| ISetTodoPage
