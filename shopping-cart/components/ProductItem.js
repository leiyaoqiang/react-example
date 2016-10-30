import React, { Component } from 'react'

class ProductItem extends Component {
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
				<div>{product.title} - ${product.price}</div>
				{buttonEl}
			</div>
		)
	}
}

export default ProductItem