import { combineReducers } from 'redux'
import products, * as fromProducts from './products'
import cart, * as fromCart from './cart'

export default combineReducers({
	products,
	cart
})

function getProduct (state, productId) {
	return fromProducts.getProduct(state.products, productId)
}

function getQuantity (state, productId) {
	return fromCart.getQuantity(state.cart, productId)
}

function getAddedIds (state) {
	return fromCart.getAddedIds(state.cart)
}

export function getCartProducts (state) {
	return getAddedIds(state).map(productId => {
		return Object.assign(
			{},
			getProduct(state, productId), 
			{ quantity: getQuantity(state, productId) }
		);
	})
}

export function getTotal (state) {
	return getAddedIds(state).reduce((total, productId) => {
		return total + getQuantity(state, productId) * getProduct(state, productId)['price']
	}, 0)
}