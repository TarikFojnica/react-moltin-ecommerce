import React, { Component } from 'react';
import '../styles/css/main.css';
import moltin from '../vendor/moltin';
import 'semantic-ui-css/semantic.min.css';
import Spotlight from './Spotlight'
import Cover from './Cover'

class Home extends React.Component {
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
			<div className="home-intro">
				<Cover/>
				<Spotlight articles={this.state.data}/>
			</div>
		);
	}
}

export default Home;
