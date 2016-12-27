import React from 'react'
import Categories from './Categories'

export default class SidebarCart extends React.Component {
	render() {
		return (
			<div className="sidebar-cart sidebar-element">
				<h4>In Cart <i className="in cart icon"></i></h4>
				<p>No items in cart</p>
			</div>
		);
	}
}
