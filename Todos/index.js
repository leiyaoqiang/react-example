import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/app.js'
import todoApp from './reduers/todoApp.js'

const store = createStore(todoApp);
const rootEl = document.getElementById('root');

function render () {
	const { todos, visibilityFilter } = store.getState();

	ReactDOM.render(
		<App todos={todos} visibilityFilter={visibilityFilter} dispatch={store.dispatch} />,
		rootEl
	);
}
render(); 
store.subscribe(render);