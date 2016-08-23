import React, { PropTypes } from 'react'

const TodoList = ({todos, onTodoClick}) => (
	<ul>
		{todos.map(todo =>
			<Todo
				key = {todos.id}
				{...todo}
				onClick = {() => onTodoClick(todos.id)}
			/>
		)}
	</ul>
)

TodoList.propType = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		text: PropTypes.string.isRequired,
		complete: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	onTodoClcik: PropTypes.func.isRequired
}

export default TodoList