import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo.js'
import TodoList from '../components/TodoList.js'
import Footer from '../components/Footer.js'
import { VISIBILITY_FILTER, addTodo, toggleTodo, setVisibilityFilter } from '../actions/actions.js'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VISIBILITY_FILTER;

const App = ({ dispatch, visibilityTodos, visibilityFilter }) => (
	<div>
		<AddTodo
			handleSubmit={ text => dispatch(addTodo(text)) }
		/>
		<TodoList
			todos={visibilityTodos}
			onTodoClick={ index => dispatch(toggleTodo(index))}
		/>
		<Footer
			visibilityFilter={visibilityFilter}
			onClick={ filter => dispatch(setVisibilityFilter(filter)) }
		/>
	</div>
)

function filterTodos (todos, filter) {
	switch (filter) {
		case SHOW_ALL:
			return todos;
		case SHOW_COMPLETED:
			return todos.filter(t => t.completed);
		case SHOW_ACTIVE:
			return todos.filter(t => !t.completed)
		default:
			return todos;
	}
}

function selector (state) {
	return {
		visibilityFilter: state.visibilityFilter,
		visibilityTodos: filterTodos(state.todos, state.visibilityFilter)
	}
}

export default connect(selector)(App)