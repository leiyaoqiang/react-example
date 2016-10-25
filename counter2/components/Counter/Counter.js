import React, { Component } from 'react';

export default class Counter extends Component {
	constructor (props) {
		super(props);
		this.incrementIfOdd = this.incrementIfOdd.bind(this);
		this.incrementAsync = this.incrementAsync.bind(this);
	}

	incrementIfOdd () {
		if (this.props.value % 2 !== 0) {
			this.props.onIncrement();
		}
	}

	incrementAsync () {
		setTimeout(this.props.onIncrement, 1000);
	}

	render () {
		const { value, onIncrement, onDecrement } = this.props;

		return (
			<p>
				Clicked: <span id="value"> { value } </span> times
				<button id="increment" onClick={ onIncrement } >+</button>
				<button id="decrement" onClick={ onDecrement }>-</button>
				<button id="incrementIfOdd" onClick={ this.incrementIfOdd }>Increment if odd</button>
				<button id="incrementAsync" onClick={ this.incrementAsync }>Increment async</button>
			</p>
		);
	}
}