import React, { Component, PropTypes } from 'react'

export default class Product extends Component {
	render() {
		const { title, price, quantity } = this.props;
		return (
			<div>{title} - &#36;{price} {quantity ? `x ${quantity}` : null}</div>
		)
	}
}

Product.propTypes = {
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	quantity: PropTypes.number
}