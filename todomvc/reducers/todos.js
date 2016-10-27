import { ADD_TODO, UPDATE_TODO, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_COMPLETED } from '../constants/ActionTypes'

const initialState = [
	{
		text: 'Use Redux',
		completed: false,
		id: 1
	}
];

export default function todos (state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				{
					text: action.text,
					completed: false,
					id: state.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1
				},
				...state
			]
		case UPDATE_TODO:
			return state.map(todo => (
				todo.id === action.id ?
					Object.assign({}, todo, {text: action.text}) :
					todo
			))
		case DELETE_TODO:
			return state.filter(todo => todo.id !== action.id)
		case COMPLETE_TODO:
			return state.map((todo) => 
				todo.id === action.id ?
					Object.assign({}, todo, { completed: !todo.completed} ) :
					todo
			)
		case COMPLETE_ALL:
			const isCompletedAll = state.every(todo => todo.completed);
			return state.map(todo => Object.assign({}, todo, { completed: !isCompletedAll }))
		case CLEAR_COMPLETED:
			return state.filter(todo => !todo.completed)
		default:
			return state
	}
}