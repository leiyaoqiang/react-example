import React, { Component } from 'react'
import { connect } from 'react-redux'

class CartContainer extends Component {
	render () {
		return (
			<div>Cart</div>
		)
	}
}

export default connect()(CartContainer)