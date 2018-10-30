import React from 'react';
import {NavLink} from 'react-router-dom';

export default class PrimaryNavigation extends React.PureComponent {
	render() {
		return (
			<ul>
				<li><NavLink to={'/'}>Home</NavLink></li>
			</ul>
		);
	}
}