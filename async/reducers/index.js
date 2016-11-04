import { combineReducers } from 'redux'
import { REQUEST_POSTS, RECEIVE_POSTS, SELLECT_REDDIT, INVALIDATE_REDDIT } from '../actions'

function selectedReddit (state = 'reactjs', action) {
	switch (action.type) {
		case SELLECT_REDDIT:
			return action.reddit;
		default:
			return state;
	}
}

function posts (state = {
	isFetching: false,
	didInvalidate: true,
	items: []
}, action) {
	switch (action.type) {
		case REQUEST_POSTS:
			return Object.assign({}, state, { isFetching: true });
		case RECEIVE_POSTS: 
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				items: action.posts,
				lastUpdated: action.receiveAt
			});
		case INVALIDATE_REDDIT:
			return Object.assign({}, state, { didInvalidate: true });
		default:
			return state;
	}
}

function postsByReddit (state = {}, action) {
	switch (action.type) {
		case REQUEST_POSTS:
		case RECEIVE_POSTS:
		case INVALIDATE_REDDIT:
			return Object.assign({}, state, {
				[action.reddit]: posts(state[action.reddit], action)
			});
		default:
			return state;
	}
}


export default combineReducers({
	selectedReddit,
	postsByReddit
})