import React, { PropTypes } from 'react'

const Posts = ({ posts }) => (
	<ul>
		{
			posts.map( (post, i) =>
				<li key={ i }>{ post.title }</li>
			)
		}
	</ul>
);

Posts.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired
	}).isRequired).isRequired
};

export default Posts;