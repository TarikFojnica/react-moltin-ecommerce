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
				<Header />

				<div className="ui container fluid">
					<div className="ui grid">
						<div className="three wide column">
							<Sidebar/>
						</div>

						<div className="thirteen wide column">
							<div className="app-content">{this.props.children}</div>
						</div>

					</div>
				</div>

				<Footer/>
			</div>
		);
	}
}

export default Layout;
