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

export const completeAll = () => {
	return {
		type: types.COMPLETE_ALL
	}
}

export const deleteTodo = (id) => {
	return {
		type: types.DELETE_TODO,
		id
	}
}

export const clearCompleted = () => {
	return {
		type: types.CLEAR_COMPLETED
	}
}

export const updateTodo = (id, text) => {
	return {
		type: types.UPDATE_TODO,
		id,
		text
	}
}