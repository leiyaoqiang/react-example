import React from 'react'
import AddTodo from './AddTodo.js'
import TodoList from './TodoList.js'
import Footer from './Footer.js'
import { addTodo, toggleTodo, setVisibilityFilter } from '../actions/actions.js'

const App = ({todos, dispatch}) => (
	<div>
		<AddTodo
			handleSubmit={ text => dispatch(addTodo(text))}
		/>
		<TodoList
			todos={todos}
			onTodoClick={ index => dispatch(toggleTodo(index)) }
		/>
		<Footer
			onClick={ filter => dispatch(setVisibilityFilter(filter)) }
		/>
	</div>
)

export default App