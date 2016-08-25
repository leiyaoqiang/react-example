// Action Creator And Constants
import fetch from 'isomorphic-fetch'

// 常量 Constants
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVED_POSTS = 'RECEIVED_POSTS'
export const SELECT_SUBRIDDIT = 'SELECT_SUBRIDDIT'
export const INVALIDATE_SUBRIDDIT = 'INVALIDATE_SUBRIDDIT'

// Action Creator

export function selectSubreddit (subreddit) {
	return {
		type: SELECT_SUBRIDDIT,
		subreddit
	}
}

export function invalidateSubreddit (subreddit) {
	return {
		type: INVALIDATE_SUBREDDIT,
		subreddit
	}
}

function requestPosts (subreddit) {
	return {
		type: REQUEST_POSTS,
		subreddit
	}
}

function receivedPosts (subreddit, json) {
	return {
		type: RECEIVED_POSTS,
		subreddit,
		posts: json.data.children.map(child => child.data),
		receivedAt: Date.now()
	}
}

function fetchPosts (subreddit) {
	return dispatch => {
		dispatch(requestPosts(subreddit));
		return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
			.then(response => response.json())
			.then(json => dispatch(receivedPosts(subreddit, json)))
	}
}

function shouldFetchPosts (state, subreddit) {
	const posts = state.postsBySubreddit[subreddit];

	if (!posts) {
		return true;
	} else if (posts.isFetching) {
		return false;
	} else {
		return posts.didInvalidate
	}
}

export function fetchPostsIfNeeded (subreddit) {
	return (dispatch, getState) => {
		if (shouldFetchPosts(getState(), subreddit)) {
			return dispatch(fetchPosts(subreddit));
		}
	}
}