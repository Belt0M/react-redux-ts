import axios from 'axios'
import { Dispatch } from 'redux'
import { ETodoActionTypes, TodoActions } from '../../types/todo'

export const fetchTodos = (page = 1, limit = 10) => {
	return async (dispatch: Dispatch<TodoActions>) => {
		try {
			dispatch({ type: ETodoActionTypes.FETCH_TODOS })
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/todos',
				{
					params: { _page: page, _limit: limit },
				}
			)
			setTimeout(() => {
				dispatch({
					type: ETodoActionTypes.FETCH_TODOS_SUCCESS,
					payload: response.data,
				})
			}, 1500)
		} catch (e) {
			dispatch({
				type: ETodoActionTypes.FETCH_TODOS_ERROR,
				payload: `Can't fetch todos data: ${e}`,
			})
		}
	}
}

export const setTodoPage = (page: number) => {
	return { type: ETodoActionTypes.SET_TODO_PAGE, payload: page }
}
