import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

export default function configureStore (preloadedState) {
	const store = createStore(
		rootReducer,
		preloadedState,
		applyMiddleware(thunkMiddleware, createLogger())
	);

	if (module.hot) {
		module.hot.accept('../reducers', function () {
			const nextRootRecucer = require('../reducers').default;
			store.replaceReducer(nextRootRecucer)
		})
	}

	return store;
}