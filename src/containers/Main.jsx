import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {Router, Route, Switch} from 'react-router-dom';

import history from '../history';
import theme from '../theme';

import Home from './Home';

const Container = styled.main``;

export default class Main extends React.Component {
	render() {
		return(
			<ThemeProvider theme={theme}>
				<Container>
					<Router history={history}>
						<Switch>
							<Route exact path="/" component={Home} />
						</Switch>
					</Router>
				</Container>
			</ThemeProvider>
		);
	}
}