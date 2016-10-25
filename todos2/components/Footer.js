import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilter } from '../actions'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilter;

const Footer = () => (
	<p>
		show: 
		{" "}
		<FilterLink filter={SHOW_ALL}>
			All
		</FilterLink>
		{", "}
		<FilterLink filter={SHOW_COMPLETED}>
			Completed
		</FilterLink>
		{", "}
		<FilterLink filter={SHOW_ACTIVE}>
			Active
		</FilterLink>
	</p>
);

export default Footer;