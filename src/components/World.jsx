import React from 'react';
import { geoEquirectangular, geoPath } from 'd3-geo';

import Loading from './Loading';

import worlddata from '../data/world';

export default class World extends React.PureComponent {

	render(){
		const height = 500;
		const width = 860;

		const projection = geoEquirectangular().fitSize([width, height],  worlddata);
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
			<svg width={width} height={height}  stroke={'rebeccapurple'}>
				{countries}
			</svg>
		);
	}
}