import React from 'react'
import Categories from './Categories'
import SidebarCart from './SidebarCart'

export default class Sidebar extends React.Component {
	render() {
		return (
			<div className="sidebar-inner">
				<SidebarCart/>
				<Categories/>
			</div>
		);
	}
}
