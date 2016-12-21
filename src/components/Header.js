import React from 'react'
import {Link} from 'react-router'
import Cart from './Cart'

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="ui fixed menu">
					<div className="ui container">
						<Link to="/" className="header item">Home</Link>
						<a className="item ui right floated" href="#">
							<Cart/>
						</a>
					</div>
				</div>
			</header>
		);
	}
}
