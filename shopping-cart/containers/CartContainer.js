import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'
import { getCartProducts, getTotal } from '../reducers'
import { checkout } from '../actions'

class CartContainer extends Component {
	render () {
		const { products, total, checkout } = this.props;
		return (
			<div>
				<h3>Your Cart</h3>
				<Cart 
					products={products}
					total={total}
					handleCheckoutClick= {() => checkout(products)}
					/>
			</div>
		)
	}
}

CartContainer.prodTypes = {
	products: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		inventory: PropTypes.number.isRequired,
		quantity: PropTypes.number.isRequired
	}).isRequired).isRequired,
	total: PropTypes.number.isRequired
}

function mapStateToProps (state) {
	return {
		products: getCartProducts(state),
		total: getTotal(state)
	}
}

export default connect(
	mapStateToProps, 
	{ checkout }
)(CartContainer)