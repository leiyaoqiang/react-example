import React from 'react'
import AddTodo from './AddTodo.js'
import TodoList from './TodoList.js'
import Footer from './Footer.js'
import { VISIBILITY_FILTER, addTodo, toggleTodo, setVisibilityFilter } from '../actions/actions.js'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VISIBILITY_FILTER;

const App = ({todos, visibilityFilter, dispatch}) => (
	<div>
		<AddTodo
			handleSubmit={ text => dispatch(addTodo(text))}
		/>
		<TodoList
			todos={filterTodos(todos, visibilityFilter)}
			visibilityFilter={visibilityFilter}
			onTodoClick={ index => dispatch(toggleTodo(index)) }
		/>
		<Footer
			visibilityFilter={visibilityFilter}
			onClick={ filter => dispatch(setVisibilityFilter(filter)) }
		/>
	</div>
)

function filterTodos (todos, visibilityFilter) {
	switch (visibilityFilter) {
		case SHOW_ALL:
			return todos;
		case SHOW_COMPLETED:
			return todos.filter(t => t.completed);
		case SHOW_ACTIVE:
			return todos.filter(t => !t.completed);
		default:
			return todos;
	}
	return todos;
}


export default App