import React from 'react';
import Categories from './Categories';
import SidebarCart from './SidebarCart';
import events from '../vendor/pub-sub';

export default class Sidebar extends React.Component {
	state = {
		visible: false,
	};

	componentDidMount() {
		let _this = this;

		events.subscribe('SIDEBAR_VISIBILITY', function(obj) {
			_this.setState({
				visible: obj
			})
		});
	};

	render() {
		return (
			<div>
				<div className="sidebar-overlay"></div>
				<div className={`ui wide sidebar visible ${this.state.visible ? 'display-on-mobile' : ''}`}>
					<span className="close">
						Close
					</span>
					<div className="sidebar-inner">
						<SidebarCart/>
						<Categories/>
					</div>
				</div>
			</div>
		);
	}
}
