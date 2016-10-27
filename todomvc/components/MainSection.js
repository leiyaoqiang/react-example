import React, { Component, PropTypes } from 'react'
import TodoItem from './TodoItem'
import Footer from './Footer'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/TodoFilters'

const TODO_FILTERS = {
	[SHOW_ALL]: () => true,
	[SHOW_ACTIVE]: (todo) => !todo.completed,
	[SHOW_COMPLETED]: (todo) => todo.completed
}

class MainSection extends Component {
	constructor (props, context) {
		super(props, context)
		this.state = {
			filter: SHOW_ALL
		}
	}
	
	bandleShow (filter) {
		this.setState({filter: filter})
	}

	handleClearCompleted () {
		this.props.actions.clearCompleted()
	}

	renderToggleAll (completedCount) {
		const { todos, actions } = this.props;
		if (todos.length > 0) {
			return (
				<input
					className="toggle-all"
					type="checkbox"
					checked={completedCount === todos.length}
					onChange={() => actions.completeAll()}
				/>
			)
		}
	}

	renderFooter (completedCount) {
		const { filter } = this.state;
		const { todos, actions } = this.props;
		const activeCount = todos.length - completedCount;
		
		if (todos.length > 0) {
			return (
				<Footer
					selectedFilter={filter}
					completedCount={completedCount}
					activeCount={activeCount}
					onShow={this.bandleShow.bind(this)}
					onClearCompleted={this.handleClearCompleted.bind(this)}
				/>
			)			
		}
	}

	render () {
		const { todos, actions } = this.props;
		const completedCount = todos.reduce((sum, todo) => todo.completed ? sum + 1 : sum, 0);
		const showedTodos = todos.filter(TODO_FILTERS[this.state.filter]);
		return (
			<section className="main">
				{this.renderToggleAll(completedCount)}
				<ul className="todo-list">
					{showedTodos.map((todo) => <TodoItem key={todo.id} todo={todo} {...actions} />)}
				</ul>
				{this.renderFooter(completedCount)}
			</section>
		)
	}
}

MainSection.propTypes = {
	todos: PropTypes.array.isRequired,
	actions: PropTypes.object.isRequired
}

export default MainSection;