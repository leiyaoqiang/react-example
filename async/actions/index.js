import 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELLECT_REDDIT = 'SELLECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export function sellectReddit (reddit) {
	return {
		type: SELLECT_REDDIT,
		reddit
	}
}

export function invalidateReddit (reddit) {
	return {
		type: INVALIDATE_REDDIT,
		reddit
	}
}

function receivePosts (reddit, json) {
	return {
		type: RECEIVE_POSTS,
		reddit,
		posts: json.data.children.map(child => child.data),
		receiveAt: Date.now()
	}
}

function requestPosts (reddit) {
	return {
		type: REQUEST_POSTS,
		reddit
	}
}

function fetchPosts (reddit) {
	return dispatch => {
		dispatch(requestPosts(reddit));
		return fetch(`https://www.reddit.com/r/${reddit}.json`)
			.then(response => response.json())
			.then(json => dispatch(receivePosts(reddit, json)))
	}
}

function shouldFetchPosts (state, reddit) {
	const posts = state.postsByReddit[reddit];

	if (!posts) {
		return true;
	} else if (posts.isFetching) {
		return false;
	}

	return posts.didInvalidate
}

export function fetchPostsIfNeeded (reddit) {
	return (dispatch, getState) => {
		if (shouldFetchPosts(getState(), reddit)) {
			return dispatch(fetchPosts(reddit));
		}
	}
}