import React from 'react';
import Categories from './Categories';
import SidebarCart from './SidebarCart';
import events from '../vendor/pub-sub';
import Social from './Social'

export default class Sidebar extends React.Component {
	state = {
		visible: false,
	};

	closeSidebar = () =>  {
		this.setState({
			visible: false
		})
	};

	componentDidMount = () => {
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
				<div className={`ui wide sidebar visible ${this.state.visible ? 'display-on-mobile' : ''}`}>
					<div className="sidebar-inner">
						<button className="ui button close-sidebar" onClick={this.closeSidebar}><i className="angle double left icon"></i> Close</button>
						<SidebarCart/>
						<Categories/>
						<Social/>
					</div>
				</div>
			</div>
		);
	}
}
