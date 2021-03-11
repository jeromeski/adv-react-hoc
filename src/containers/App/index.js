import React from 'react';

import Userlist from '../Userlist';
import UserProfile from '../UserProfile';

const App = () => {
	return (
		<div>
			<UserProfile
				name='Yihua'
				email='yihuazhang@gmail.com'
				dataSource='https://jsonplaceholder.typicode.com/posts'
			/>
			<Userlist dataSource='https://jsonplaceholder.typicode.com/users' />
		</div>
	);
};

export default App;
