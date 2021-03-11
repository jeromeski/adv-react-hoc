import React from 'react';
import withDataHOC from '../../components/withDataHOC';

const UserList = ({ data }) => {
	return (
		<div>
			<h1>Users List</h1>
			{data.map((user) => (
				<div key={user.id}>
					<h1>{user.name}</h1>
					<h2>{user.email}</h2>
				</div>
			))}
		</div>
	);
};

export default withDataHOC(UserList);
