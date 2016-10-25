const visibilityFilter = (filter = "SHOW_ALL", action) => {
	switch (action.type) {
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return filter;
	}
}

export default visibilityFilter;