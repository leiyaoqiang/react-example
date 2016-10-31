import React, { Component, PropTypes } from 'react'
import Product from './Product'

export default class ProductItem extends Component {
	render () {
		const { product, handleClick } = this.props;
		let buttonEl;
		if (product.inventory > 0) {
			buttonEl = <button onClick={handleClick}>Add to cart</button>
		} else {
			buttonEl = <button disabled>sold out</button>
		}

		return (
			<div style={{ marginBottom: 20 }}>
				<Product
					title={product.title}
					price={product.price}
				/>
				{buttonEl}
			</div>
		)
	}
}

ProductItem.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		inventory: PropTypes.number.isRequired
	}),
	handleClick: PropTypes.func.isRequired
}