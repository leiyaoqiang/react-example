import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore.js'
import AsyncApp from './AsyncApp.js'

const store = configureStore();

const Root = props => (
	<Provider store={store}>
		<AsyncApp />
	</Provider>
)

export default Root