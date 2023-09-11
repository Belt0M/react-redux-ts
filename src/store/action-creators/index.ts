import * as TodosActionCreators from '../action-creators/todo'
import * as UsersActionCreators from '../action-creators/user'

export default {
	...UsersActionCreators,
	...TodosActionCreators,
}
