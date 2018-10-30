import React from 'react';
import { geoEquirectangular, geoPath } from 'd3-geo';

import Loading from './Loading';

import worlddata from '../data/world';

export default class World extends React.Component {

	render(){
		const height = 500;
		const width = 860;

		const projection = geoEquirectangular().fitSize([860, 500],  worlddata);
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