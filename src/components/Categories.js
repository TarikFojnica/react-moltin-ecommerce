import React from 'react';
import {Link} from 'react-router'

export default class Categories extends React.Component {
	render() {
		return (
			<div className="ui list categories">
				<Link className="item" to="/category/1">Sleeves</Link>
				<Link className="item sub" to="/category/1"><i className="chevron right icon"></i> Veg. Tanned Leather Sleeves</Link>
				<Link className="item sub" to="/category/1"><i className="chevron right icon"></i> Leather Sleeves</Link>
				<Link className="item" to="/category/1">Bow Ties</Link>
			</div>
		);
	}
}
