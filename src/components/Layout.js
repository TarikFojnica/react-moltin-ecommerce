import React, { Component } from 'react';
import '../styles/css/main.css';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
import Footer from './Footer'

class Layout extends React.Component {

	render() {
		return (
			<div className="app-container">
				<Header />

				<div className="app-content">{this.props.children}</div>

				<Footer/>
			</div>
		);
	}
}

export default Layout;
