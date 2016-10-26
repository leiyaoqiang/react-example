import { ADD_TODO, COMPLETE_TODO } from '../constants/ActionTypes'

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
		case COMPLETE_TODO:
			return state.map((todo) => 
				todo.id === action.id ?
					Object.assign({}, todo, { completed: !todo.completed} ) :
					todo
			)
		default:
			return state
	}
}