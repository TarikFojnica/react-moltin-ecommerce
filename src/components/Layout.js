import React, { Component } from 'react';
import '../styles/css/main.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
import Footer from './Footer'
import Sidebar from './Sidebar'

class Layout extends React.Component {

	render() {
		return (
			<div className="app-container">
				<div className="ui wide sidebar inverted visible">
					<Sidebar/>
				</div>

				<div className="pusher">
					<Header />
					<div className="ui container fluid">
						<div className="app-content">{this.props.children}</div>
					</div>

					<Footer/>
				</div>
			</div>
		);
	}
}

export default Layout;
