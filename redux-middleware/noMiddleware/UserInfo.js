import { Component } from 'react';
import { connect } from 'redux';
import Post from './Post.js';
import { loadPostsSuccess, loadPostsFailure, loadPostsRequest } from './actionCreators.js';

class UserInfo extends Component {
	constructor (props) {
		super(props);
	}

	loadPosts (userId) {
		// 调用 React Redux `connect()` 注入 props :
		let { dispath, posts } = this.props;

		if (posts[userId]) {
			// 这里是被缓存的数据，啥也不做
			return
		}

		// Reducer 可以通过 `isFetching` 响应这个 action 
		// 因此我们显示一个 Spinner 控件
		dispatch(loadPostsRequest(userId));

		// Reducer 可以通过填写 `userId` 响应这个action
		fetch(`http://myapi.com/user/${userId}/posts`).then(
			response => dispath(loadPostsSuccess(userId, response)),
			error => dispath(loadPostsFailure(userId, error))
		);
	}
	
	componentDidMount () {
		this.loadPosts(this.props.userId);
	}

	componentWillReceiveProps (nextProps) {
		if (nextProps.userId !== this.props.userId) {
			this.loadPosts(nextProps.userId);
		}
	}

	render () {
		if (this.props.isLoading) {
			return <p>Loading...</p>
		}

		let posts = this.props.posts.map(post => 
			<Post post={post} key={post.id} />
		);

		return <div>{posts}</div>
	}
}

export default connect(state => {
	posts: state.posts
})(UserInfo);