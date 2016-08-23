import React, { PropTypes } from 'react'
import Link from './Link.js'
import { VISIBILITY_FILTER } from '../actions/actions.js'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VISIBILITY_FILTER;

const Footer = ({ onClick }) => {
	return (
		<div>
			Show:
			{' '}
			<Link filter={ SHOW_ALL } onClick={ onClick }>ALL</Link>
			{' '}
			<Link filter={ SHOW_COMPLETED } onClick={ onClick }>Completed</Link>
			{' '}
			<Link filter={ SHOW_ACTIVE } onClick={ onClick }>Active</Link>
		</div>
	)
}