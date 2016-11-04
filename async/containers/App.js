import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { sellectReddit, invalidateReddit, fetchPostsIfNeeded } from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class App extends Component {
	constructor (props, context) {
		super(props, context);
		this.handleChange = this.handleChange.bind(this);
		this.handleRefreshClick = this.handleRefreshClick.bind(this);
	}

	componentDidMount () {
		const { selectedReddit, fetchPostsIfNeeded } = this.props;
		fetchPostsIfNeeded(selectedReddit)
	}

	componentWillReceiveProps (nextProps) {
		const { selectedReddit, fetchPostsIfNeeded } = nextProps;
		if (selectedReddit !== this.props.selectedReddit) {
			fetchPostsIfNeeded(selectedReddit);
		}
	}
 
	handleChange (nextReddit) {
		this.props.sellectReddit(nextReddit)
	}

	handleRefreshClick (e) {
		e.preventDefault();

		const { selectedReddit, invalidateReddit, fetchPostsIfNeeded } = this.props;
		invalidateReddit(selectedReddit);
		fetchPostsIfNeeded(selectedReddit);
	}

	render() {
		const { selectedReddit, lastUpdated, posts, isFetching } = this.props;
		const isEmpty = posts.length === 0;
		return (
			<div>
				<Picker value={selectedReddit}
					options={['reactjs', 'frontend']}
					onChange={ this.handleChange } />
				<p>
					{lastUpdated &&
						<span>
							Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
							{' '}
						</span>
					}
					{!isFetching &&
						<a href="#"
							onClick={this.handleRefreshClick}>Refresh</a>
					}
				</p>
				{isEmpty 
					? (isFetching ? <h2>loading...</h2> : <h2>Empty.</h2>)
					: <div style={{opacity: isFetching ? 0.5 : 1}}>
							<Posts posts={posts} />
						</div>
				}

			</div>
		)
	}
}

function mapStateToProps (state) {
	const { selectedReddit, postsByReddit } = state;
	const {
		isFetching,
		didInvalidate,
		items,
		lastUpdated
	} = postsByReddit[selectedReddit] || {
		isFetching: false,
		items: []
	};

	return {
		selectedReddit,
		lastUpdated,
		posts: items,
		isFetching 
	}
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators({
		sellectReddit, 
		invalidateReddit, 
		fetchPostsIfNeeded 
	}, dispatch);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)