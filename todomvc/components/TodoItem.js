import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'

class TodoItem extends Component {
	constructor (props, context) {
		super(props, context)
		this.state={
			editing: false
		}
	}

	handleSave (id, text) {
		if (text.length === 0) {
			this.props.deleteTodo(id);
		} else {
			this.props.updateTodo(id, text);
		}
		this.setState({editing: false});
	}

	handleDoubleClick (e) {
		this.setState({ editing: true })
	}

	renderToggle () {
		const { todo, completeTodo } = this.props;
		return (
			<input
				type="checkbox"
				className="toggle"
				checked={todo.completed}
				onChange={ () => completeTodo(todo.id) }/>
		)
	}

	render () {
		const { todo, deleteTodo, completeTodo } = this.props;
		let element

		if (this.state.editing) {
			element = (
				<TodoTextInput editing={this.state.editing}
											 text={todo.text}
											 onSave={(text) => this.handleSave(todo.id, text)}/>
			)
		} else {
			element = (
				<div className="view">
					<input type="checkbox"
								 className="toggle"
								 checked={todo.completed}
								 onChange={ () => completeTodo(todo.id) }/>
					<label onDoubleClick={this.handleDoubleClick.bind(this)}>
						{todo.text}
					</label>
					<button className="destroy" onClick={() => deleteTodo(todo.id) }></button>
				</div>
			)
		}


		return (
			<li className={classnames({
					completed: todo.completed,
					editing: this.state.editing 
				})}>
				{element}
			</li>)
	}
}

export default TodoItem;