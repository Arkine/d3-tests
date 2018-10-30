import React from 'react';

import Stage from '../components/Stage';
import DataList from '../components/DataList';

export default class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Stage />
				<DataList />
			</React.Fragment>
		);
	}
}