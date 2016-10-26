import * as types from '../constants/ActionTypes'

export const addTodo = (text) => {
	return { type: types.ADD_TODO, text: text }
}

export const completeTodo = (id) => {
	return {
		type: types.COMPLETE_TODO,
		id
	}
}