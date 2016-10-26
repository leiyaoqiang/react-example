import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'

class MainSection extends Component {
	render () {
		const { todos, actions } = this.props;
		return (
			<section className="main">
				<ul className="todo-list">
					{todos.map((todo) => <TodoItem key={todo.id} todo={todo} {...actions} />)}
				</ul>
			</section>
		)
	}
}

MainSection.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

export default MainSection;