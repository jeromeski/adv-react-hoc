import React from 'react';
import withDataHOC from '../../components/withDataHOC';

const UserProfile = (props) => {
	console.log(props);
	return (
		<div>
			<h1>{props.name}</h1>
			<h2>{props.email}</h2>
			Posts:
			{props.data.map((post) => (
				<div key={post.id}>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
				</div>
			))}
		</div>
	);
};

export default withDataHOC(UserProfile);
