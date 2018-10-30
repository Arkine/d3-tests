import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
	color: #fff;
`;

export default class Logo extends React.PureComponent {
	render() {
		return(
			<Container>Logo here</Container>
		);
	}
}