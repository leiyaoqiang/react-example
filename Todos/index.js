import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import App from './components/app.js'
import todoApp from './reduers/todoApp.js'

const store = createStore(todoApp);
const rootEl = document.getElementById('root');

render(
	<App todos={store.getState()} dispatch={store.dispatch} />,
	rootEl
);
store.subcribute(App);