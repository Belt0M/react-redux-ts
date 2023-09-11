import { combineReducers } from 'redux'
import { todoReducer } from './todoReducer'
import { userReducer } from './userRreducer'

export const rootReducer = combineReducers({
	users: userReducer,
	todos: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>
