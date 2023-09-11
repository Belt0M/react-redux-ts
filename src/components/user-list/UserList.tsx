import { useEffect } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import type {} from 'redux-thunk/extend-redux'
import { useActions } from '../../hooks/useActions'

const UserList: React.FC = () => {
	const { error, loading, users } = useTypedSelector(state => state.users)
	const { fetchUsers } = useActions()
	useEffect(() => {
		fetchUsers()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (loading) {
		return <h1>Loading...</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			{users.map(user => (
				<div key={user.id}>{user.name}</div>
			))}
		</div>
	)
}

export default UserList
