import React from 'react';
import { geoMercator, geoPath } from 'd3-geo';

// import Loading from './Loading';

import worlddata from '../data/world';

export default class World extends React.Component {
	constructor(props) {
		super(props);

		this.map = React.createRef();

		this.state ={
			height: 500,
			width: 860
		};
	}

	refCallback = (element) => {
		if (element) {
			console.log('el', element.getBoundingClientRect());
			this.setState({
				height: element.getBoundingClientRect().height,
				width: element.getBoundingClientRect().width,
			});
		}
	}

	render(){
		const {height, width} = this.state;

		const projection = geoMercator().translate([height / 2, width / 2]);;
		const pathGenerator = geoPath().projection(projection);

		const countries = worlddata.features.map((d, i) => {
			return (
				<path
					key={`path-${i}`}
					d={pathGenerator(d)}
				/>
			)
		});

		return (
			<svg ref={this.refCallback} width={width} height={height} viewBox={"0 0 860 500"} preserveAspectRatio="xMinYMin meet" stroke={'rebeccapurple'}>
				{countries}
			</svg>
		);
	}
}