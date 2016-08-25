import { SELECT_SUBREDDIT } from '../actions/actions.js'

export default function selectedSubreddit (state = 'reatjs', action) {
	switch (action.type) {
		case SELECT_SUBREDDIT:
			return action.subreddit;
		default:
			return state;
	}
}