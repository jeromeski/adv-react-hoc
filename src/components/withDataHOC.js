import axios from 'axios';
import React from 'react';

const withDataHOC = (WrappedComponent) => {
	class WithData extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				data: []
			};
		}

		// getData = async () => {
		// 	const response = await axios.get(this.props.dataSource);
		// 	this.setState({ data: response.data.slice(0, 10) });
		// };

		getData() {
			axios
				.get(this.props.dataSource)
				.then((res) => this.setState({ data: res.data.slice(0, 3) }))
				.catch((err) => console.log(err));
		}

		componentDidMount() {
			this.getData();
		}
		render() {
			const { dataSource, ...otherProps } = this.props;
			return <WrappedComponent data={this.state.data} {...otherProps} />;
		}
	}
	return WithData;
};

export default withDataHOC;
