import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActionsCreator from '../store/action-creators/user'

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(UserActionsCreator, dispatch)
}
