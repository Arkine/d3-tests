import React from 'react';
import styled from 'styled-components';

import Stage from '../components/Stage';
import DataList from '../components/DataList';
import Sidebar from '../components/Sidebar';
import Logo from '../components/header/Logo';
// import UnorderedList from '../components/common/UnorderedList';
import PrimaryNavigation from '../components/navigation/Primary';

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
					<Stage />
					<DataList />
				</Column>
			</Container>
		);
	}
}