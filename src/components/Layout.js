import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/css/main.css';
import moltin from '../vendor/moltin';
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';
import Footer from './Footer'

class Layout extends React.Component {
	state = {
		data: [],
		loaded: false
	};

	componentDidMount() {
		let _this = this;
		moltin.Authenticate(function() {
			_this.setState({
				data: moltin.Product.List()
			});
		});
	}

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
