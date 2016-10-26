import React, { Component, PropTypes } from 'react'
import TodoTextInput from './TodoTextInput'

class Header extends Component {
	handleSave(text) {
		if (text.length !== 0) {
			this.props.addTodo(text)
		}
	}

	render () {
		return (
			<header className="header">
				<h1>todos</h1>
				<TodoTextInput
					newTodo
					placeholder="what needs to be done?"
					onSave={this.handleSave.bind(this)}
				/>
			</header>
		)
	}
}

Header.propTypes = {
	addTodo: PropTypes.func.isRequired
}

export default Header