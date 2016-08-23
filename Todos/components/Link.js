import React, { PropTypes } from 'react'

const Link = ({active, children, filter, onClick}) => {
	if (active) {
		return <span>{children}</span>
	}

	return (
		<a href="javascrip:void(0)"
			onClick={(e) => {
				e.preventDefault();
				onClick(filter);
			}}
		>
			{children}
		</a>
	)
}

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Link