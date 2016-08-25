import posts from './posts.js'
import { REQUEST_POSTS, RECEIVED_POSTS, INVALIDATE_SUBREDDIT } from '../actions/actions.js'

export default function postsBySubreddit (state = {}, action) {
	switch (action.type) {
		case REQUEST_POSTS:
		case RECEIVED_POSTS:
		case INVALIDATE_SUBREDDIT:
			return Object.assign({}, state, {
				[action.subreddit]: posts(state[action.subreddit], action)
			})
		default:
			return state;
	}
}