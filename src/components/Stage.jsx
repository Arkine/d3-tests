import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	border: 1px solid red;
	height: 60vh;
`;

export default class Stage extends React.Component {
	render() {
		return (
			<Container>
				{this.props.children}
			</Container>
		);
	}
}