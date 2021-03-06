import React from 'react';
import styled from 'styled-components';

import Stage from '../components/Stage';
import DataList from '../components/DataList';
import Sidebar from '../components/Sidebar';
import Logo from '../components/header/Logo';
// import UnorderedList from '../components/common/UnorderedList';
import PrimaryNavigation from '../components/navigation/Primary';
import World from '../components/World';

const Container = styled.div`
	display: flex;
	flex-flow: row nowrap;
	width: 100%;

	border: 1px solid green;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;

	border: 1px solid yellow;
	width: ${props => props.width ? props.width : '100%'};
`;

/**
 * Sample data here: https://www.percona.com/blog/2011/02/01/sample-datasets-for-benchmarking-and-testing/
 * and here: https://catalog.data.gov/dataset?res_format=JSON
 */

export default class Home extends React.Component {
	render() {
		return (
			<Container>
				<Column width='20%'>
					<Sidebar>
						<Logo />
						<PrimaryNavigation />
					</Sidebar>
				</Column>
				<Column width='80%'>
					<Stage>
						<World />
					</Stage>
					<DataList />
				</Column>
			</Container>
		);
	}
}