import { combineReducers } from 'redux'
import selectedSubreddit from './selectedSubreddit.js'
import postsBySubreddit from './postsBySubreddit.js'

const rootReducer = combineReducers({
	selectedSubreddit,
	postsBySubreddit
});

export default rootReducer;