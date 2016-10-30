import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import { getAllProducts } from './actions'

const middlewares = process.env.NODE_ENV === "production" ?
	[thunk] :
	[logger(), thunk];

const store = createStore(
	reducer,
	applyMiddleware(...middlewares)
);

store.dispatch(getAllProducts())

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);