import * as types from '../constants/ActionTypes'
import api from '../api/shop'

const addToCartUnsafe = productId => {
	return {
		type: types.ADD_TO_CART,
		productId
	}
}

export const addToCart = productId => {
	return (dispatch, getState) => {
		if (getState().products.byId[productId].inventory > 0) {
			dispatch(addToCartUnsafe(productId))
		}
	}
}

const receiveProducts = products => {
	return {
		type: types.RECEIVE_PRODUCT,
		products
	}
}

export const getAllProducts = () => {
	return dispatch => {
		api.getProducts(products => {
			dispatch(receiveProducts(products))
		})
	}
}

export const checkout = (products) => {
	return (dispatch, getState) => {
		const cart = getState().cart;

		dispatch({ type: types.CHECKOUT_REQUEST });
		api.buyProducts(products, () => {
			// dispatch({
			// 	type: types.CHECKOUT_SUCCESS,
			// 	cart
			// })

			// Replace the line above with the line blowe to rollback on failure.
			dispatch({ type: types.CHECKOUT_FAILURE, cart })
		})
	}
}