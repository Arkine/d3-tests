import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	border: 1px solid blue;
`;

const List = styled.ul`
	border: 1px solid orange;
`;

export default class DataList extends React.Component {
	render() {
		return (
			<Container>
				<List></List>
			</Container>
		);
	}
}