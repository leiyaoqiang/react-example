import React, { PropTypes } from 'react'
import Link from './Link.js'

const Footer = (onClick) => {
	

	return (
		<div>
			Show:
			{' '}
			<Link>ALL</Link>
			{' '}
			<Link>Completed</Link>
			{' '}
			<Link>Active</Link>
		</div>
	)
}