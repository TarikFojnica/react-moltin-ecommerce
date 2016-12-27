import React from 'react'
import {Link} from 'react-router'
import Cart from './Cart'

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="ui secondary menu">
					<div className="ui container">
						<Link to="/" className="header item">Home</Link>
						<Link to="/" className="header item">About</Link>
						<Link to="/" className="header item">Contact</Link>
						<a className="item ui right floated" href="#">
							<Cart/>
						</a>
					</div>
				</div>
			</header>
		);
	}
}
