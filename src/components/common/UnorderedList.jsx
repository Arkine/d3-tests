import React from 'react';
import styled from 'styled-components';

const Container = styled.ul``;
const NoItems = styled.div``

export default class UnorderedList extends React.Component {
	render() {
		if (!this.props.items) {
			return <NoItems>No items to display...</NoItems>
		}

		return(
			<Container>
				{this.props.children.map((child, i) => (
					<li key={`list-item-${i}`}>${child.name}</li>
				))};
			</Container>
		);
	}
}