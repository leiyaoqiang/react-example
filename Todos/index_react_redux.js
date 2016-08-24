import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App.js'
import todoApp from './reduers/todoApp.js'

const store = createStore(todoApp);
const rootEl = document.getElementById('root');

render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootEl
)
