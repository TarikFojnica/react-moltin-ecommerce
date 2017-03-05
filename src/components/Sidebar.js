import React from 'react';
import Categories from './Categories';
import SidebarCart from './SidebarCart';
import events from '../vendor/pub-sub';

export default class Sidebar extends React.Component {
	componentDidMount() {
		events.subscribe('SIDEBAR_VISIBILITY', function(obj) {

		});
	};

	render() {
		return (
			<div className="ui wide sidebar visible">
				<div className="sidebar-inner">
					<SidebarCart/>
					<Categories/>
				</div>
			</div>
		);
	}
}
