import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/TodoFilters'

const FILTERS_TITLE = {
	[SHOW_ALL]: 'all',
	[SHOW_ACTIVE]: 'active',
	[SHOW_COMPLETED]: 'completed'
}

class Footer extends Component {

	renderTodoCount () {
		const { activeCount } = this.props;
		const itemWord = activeCount.length === 1 ? 'items' : 'item';
		return (
			<span className="todo-count">
				<strong>{activeCount > 0 ? activeCount : 'No' }</strong> {itemWord} left
			</span>
		)
	}

	renderFilterLink (filter) {
		const title = FILTERS_TITLE[filter]
		const { selectedFilter, onShow } = this.props;

		return (
			<a className={classnames({ selected: filter === selectedFilter })}
				style={{ cursor: 'pointer' }}
				onClick={() => onShow(filter)}>
				{title}
			</a>
		)
	}

	renderClearCompleted () {
		const { onClearCompleted, completedCount } = this.props;
		if (completedCount > 0) {
			return (
				<button
					className="clear-completed"
					onClick={onClearCompleted}>
					Clear completed
				</button>
			)
		}
	}

	render () {
		return (
			<footer className="footer">
				{this.renderTodoCount()}
				<ul className="filters">
					{[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map((filter) => 
						<li key={filter}>
							{this.renderFilterLink(filter)}
						</li>
					)}
				</ul>
				{this.renderClearCompleted()}
			</footer>
		)
	}
}

export default Footer