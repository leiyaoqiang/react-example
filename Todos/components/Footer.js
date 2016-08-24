import React, { PropTypes } from 'react'
import Link from './Link.js'
import { VISIBILITY_FILTER } from '../actions/actions.js'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VISIBILITY_FILTER;

const Footer = ({ visibilityFilter, onClick }) => (
	<div>
		Show:
		{' '}
		<Link active={ visibilityFilter === SHOW_ALL } filter={ SHOW_ALL } onClick={ onClick }>ALL</Link>
		{' '}
		<Link active={ visibilityFilter === SHOW_COMPLETED } filter={ SHOW_COMPLETED } onClick={ onClick }>Completed</Link>
		{' '}
		<Link active={ visibilityFilter === SHOW_ACTIVE } filter={ SHOW_ACTIVE } onClick={ onClick }>Active</Link>
	</div>
)

export default Footer