import { useEffect } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const TodoList = () => {
	const { fetchTodos, setTodoPage } = useActions()
	const { error, loading, page, todos } = useTypedSelector(state => state.todos)
	const pages = [1, 2, 3, 4, 5]

	useEffect(() => {
		fetchTodos(page, 10)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page])

	if (loading) {
		return <h1>Loading...</h1>
	}

	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div
			style={{
				borderTop: '2px dashed #00000050',
				marginTop: '2rem',
				paddingTop: '2rem',
			}}
		>
			<div>
				{todos.map(todo => (
					<div key={todo.id}>{todo.id + ' - ' + todo.title}</div>
				))}
			</div>
			<div style={{ marginTop: '2rem' }}>
				{pages.map(el => (
					<span
						key={el}
						onClick={() => setTodoPage(el)}
						style={{
							padding: '1rem',
							border: el === page ? '2px solid green' : '1px solid grey',
						}}
					>
						{el}
					</span>
				))}
			</div>
		</div>
	)
}

export default TodoList
