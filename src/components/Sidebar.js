import React from 'react'
import Categories from './Categories'

export default class Sidebar extends React.Component {
	render() {
		return (
			<div className="sidebar">
				<Categories/>
			</div>
		);
	}
}
