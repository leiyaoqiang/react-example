export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
export const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
export const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";

export function loadPostsSuccess (userId, response) {
	return {
		type: LOAD_POSTS_SUCCESS,
		userId,
		response
	}
}

export function loadPostsFailure (userId, error) {
	return {
		type: LOAD_POSTS_FAILURE,
		userId,
		error
	}
}

export function loadPostsRequest (userId) {
	return {
		type: LOAD_POSTS_REQUEST,
		userId
	}
}