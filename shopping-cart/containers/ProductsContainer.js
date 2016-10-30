import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import ProductItem from '../components/ProductItem'
import { getVisibleProducts } from '../reducers/products'

class ProductsContainer extends Component {
	render() {
		const { products, addToCart } = this.props;
		return (
			<div>
				<h3>Products</h3>
				{products.map(product => {
					return <ProductItem 
									key={product.id} 
									product={product} 
									handleClick={() => addToCart(product.id)}
								/>
				})}
			</div>
		)
	}
}

function mapStateToProps (state) {
	return {
		products: getVisibleProducts(state.products)
	}
}

export default connect(
	mapStateToProps, 
	{ addToCart }
)(ProductsContainer)
