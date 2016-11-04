import React, { Component, PropTypes } from 'react'

export default class Picker extends Component {
	render() {
		const { value, options, onChange } = this.props;

		return (
			<div className="picker">
				<h1>{value}</h1>
				<select onChange={(e) => onChange(e.target.value)}
								value={value}>
					{options.map(option => 
						<option key={option} value={option}>
							{option}
						</option>
					)}
				</select>
			</div>
		)
	}
}

Picker.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired
};