import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class TodoItem extends Component {
	render () {
		const { todo, completeTodo } = this.props;
		return (
			<li className={classnames({
				completed: todo.completed
			})}>
				<div className="view">
					<input
						type="checkbox"
						className="toggle"
						checked={todo.completed}
						onChange={ () => completeTodo(todo.id) }/>
					<label>{todo.text}</label>
				</div>
			</li>)
	}
}

export default TodoItem;