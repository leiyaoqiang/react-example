import React, { PropTypes } from 'react'
import Todo from './Todo.js'

const TodoList = ({todos, onTodoClick}) => (
	<ul>
		{todos.map((todo, index) =>
			<Todo
				key={index}
				{...todo}
				onClick={() => onTodoClick(index)}
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