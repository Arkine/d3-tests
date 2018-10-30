import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	box-sizing: border-box;

	height: 100vh;
	width: 100%;
	padding: 1rem;

	background-color: rebeccapurple;
`;

export default class Sidebar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: true
		}
	}

	render() {
		return(
			<Container>
				{this.props.children}
			</Container>
		);
	}
}