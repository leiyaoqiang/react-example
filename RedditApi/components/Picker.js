import React, { PropTypes } from 'react'

const Picker = ({ value, options, onChange }) => (
	<div>
		<h1>{ value }</h1>
		<select onChange={ e => onChange(e.target.value) }>
			{ options.map( option => 
				<option value={option} key={option}>
					{option}
				</option>)
			}
		</select>
	</div>
);

Picker.propTypes = {
	value: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.string.isRequired
	).isRequired,
	onChange: PropTypes.func.isRequired
};

export default Picker;