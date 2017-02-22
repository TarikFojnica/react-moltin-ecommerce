import React from 'react';
import {Link} from 'react-router'

export default class Categories extends React.Component {
	render() {
		return (
			<div className="ui list categories">
				<Link className="item" to="/category/1">Men Bags</Link>
				<Link className="item" to="/category/1">Women Bags</Link>
				<Link className="item" to="/category/1">Tablet Cases</Link>
				<Link className="item" to="/category/1">Specials</Link>
			</div>
		);
	}
}
