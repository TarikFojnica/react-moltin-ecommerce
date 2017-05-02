import React, { Component } from 'react';
import '../vendor/semantic/dist/semantic.min.css';
import '../styles/css/main.css';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

import moltin from '../vendor/moltin';
import { observer } from 'mobx-react';

@observer(['products'])
class Layout extends React.Component {

	componentDidMount() {
		let _this = this;
		moltin.Authenticate(function() {
			_this.props.products.products = moltin.Product.List();
		});
	}

	render() {
		return (
			<div className="app-container">
				<Sidebar/>

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
