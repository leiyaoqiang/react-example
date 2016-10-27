import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

class TodoTextInput extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			text: this.props.text || ''
		}
	}

	handleChange (e) {
		this.setState({ text: e.target.value.trim() })
	}

	handleSubmit (e) {
		const text = e.target.value.trim()
		if (e.which === 13) {
			this.props.onSave(text);
			if (this.props.newTodo) {
				this.setState({ text: '' });
			}
		}
	}

	handleBlur (e) {
		if (!this.props.newTodo) {
			this.props.onSave(e.target.value.trim())
		}
	}

	render () {
		return (<input
			className={classnames({
				'new-todo': this.props.newTodo,
				edit: this.props.editing
			})}
			type="text"
			autoFocus="ture"
			value={this.state.text}
			placeholder={this.props.placeholder}
			onChange={this.handleChange.bind(this)}
			onBlur={this.handleBlur.bind(this)}
			onKeyDown={this.handleSubmit.bind(this)}
		/>)
	}
}

export default TodoTextInput