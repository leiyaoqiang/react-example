import { combineReducers } from 'redux'
import * as types from '../constants/ActionTypes'

function addedIds (state = [], action) {
	switch (action.type) {
		case types.ADD_TO_CART:
			if (state.indexOf(action.productId) !== -1) {
				return state;
			}
			return [ action.productId, ...state ];
		case types.CHECKOUT_REQUEST:
			return [];
		case types.CHECKOUT_FAILURE:
			return action.cart.addedIds;
		default:
			return state;
	}
}

function quantityById (state = {}, action) {
	switch (action.type) {
		case types.ADD_TO_CART:
			const { productId } = action;
			return Object.assign({}, state, {
				[productId]: (state[productId] || 0) + 1
			});
		case types.CHECKOUT_REQUEST:
			return {};
		case types.CHECKOUT_FAILURE:
			return action.cart.quantityById;
		default:
			return state;
	}
}

export default combineReducers({
	addedIds,
	quantityById
})

export function getQuantity (state, productId) {
	return state.quantityById[productId] || 0
}

export function getAddedIds (state) {
	return state.addedIds
}