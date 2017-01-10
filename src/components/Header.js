import React from 'react'
import {Link} from 'react-router'
import Cart from './Cart'

export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div className="ui secondary menu">
					<div className="ui container fluid">
						<Link to="/" className="header logo item"><img src="logo.png" alt=""/></Link>
						<Link to="/" className="item">Home</Link>
						<Link to="/" className="item">About</Link>
						<Link to="/" className="item">Contact</Link>
						<Link to="/" className="item ui right cart-item floated">
							<Cart/>
						</Link>
					</div>
				</div>
			</header>
		);
	}
}
