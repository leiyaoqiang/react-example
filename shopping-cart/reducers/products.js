import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

function products (state, action) {
	switch (action.type) {
		case types.ADD_TO_CART:
			return Object.assign({}, state, {
				inventory: state.inventory - 1
			});
		default:
			return state;
	}
}

function byId (state = {}, action) {
	switch (action.type) {
		case types.RECEIVE_PRODUCT:
			return Object.assign({},
				state,
				action.products.reduce((obj, product) => {
					obj[product.id] = product;
					return obj;
				}, {})
			)
		default:
			const { productId } = action;
			if (productId) {
				return Object.assign({}, state, {
					[productId]: products(state[productId], action)
				})
			}			
			return state
	}
}

function visibleIds (state = [], action) {
	switch (action.type) {
		case types.RECEIVE_PRODUCT:
			return [
				...state,
				...action.products.map(product => product.id)
			]
		default:
			return state
	}
}

export default combineReducers({
	byId,
	visibleIds
})

export const getProduct = (state, id) => {
	return state.byId[id];
}

export const getVisibleProducts = state => {
	return state.visibleIds.map(id => getProduct(state, id));
}