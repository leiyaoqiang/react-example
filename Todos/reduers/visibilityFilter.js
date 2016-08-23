import { SET_VISIBILITY_FILTER, VISIBILITY_FILTER } from '../actions/actions.js'

const { SHOW_ALL } = VISIBILITY_FILTER

export default function visibilityFilter (state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}