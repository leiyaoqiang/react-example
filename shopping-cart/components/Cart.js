import React, { Component, PropTypes } from 'react'
import Product from './Product'

export default class Cart extends Component {
	render() {
		const { products, total, handleCheckoutClick } = this.props;
		const hasProducts = products.length > 0;
		const nodes = !hasProducts ?
			<em>Please add some product to cart.</em> :
			products.map(product => {
				return <Product key={product.id} title={product.title} price={product.price} quantity={product.quantity} />
			});

		return (
			<div>
				{nodes}
				<div style={{ marginTop: 20 }}>
					<strong>Total</strong>: {total}
					{' '}
					<button onClick={handleCheckoutClick}
						disabled={hasProducts ? '' : 'disabled'}>
						Checkout
					</button>
				</div>
			</div>
		)
	}
}

Cart.propTypes = {
	products: PropTypes.array.isRequired,
	total: PropTypes.number.isRequired,
	handleCheckoutClick: PropTypes.func.isRequired
}