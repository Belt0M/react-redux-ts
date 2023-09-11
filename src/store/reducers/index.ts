import { combineReducers } from 'redux'
import { userReducer } from './userRreducer'

export const rootReducer = combineReducers({ users: userReducer })

export type RootState = ReturnType<typeof rootReducer>
