import React from 'react';
import styled from 'styled-components';
import {Router, Route, Switch} from 'react-router-dom';

import Home from './Home';
import history from '../history';

const Container = styled.main``;

export default class Main extends React.Component {
	render() {
		return(
			<Container>
				<Router history={history}>
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</Router>
			</Container>
		);
	}
}