import { combineReducers } from 'redux'
import todos from './todos.js'
import visibilityFilter from './visibilityFilter.js'

// 不使用 combineReducers 的写法
// export default function todoApp (state = {}, action) {
// 	return {
// 		visibilityFilter: visibilityFilter(state.visibilityFilter, action),
// 		todos: todos(state.todos, action)
// 	}
// }

// 使用 combineReducers 的写法

const todoApp = combineReducers({
	visibilityFilter,
	todos
})

export default todoApp;