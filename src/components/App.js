import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import moltin from '../vendor/moltin';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
	state = {
		data: [],
	};

	componentDidMount() {
		let _this = this;
		moltin.Authenticate(function() {
			_this.setState({
				data: moltin.Product.List()
			})
		});
	}

  render() {
		let allItems = this.state.data.map(function(result, id) {
			return (
				<div key={id} className="column">
					<div className="ui card" key={id}>
						<div className="image">
							<img src={result.images[0].url.http} />
						</div>
						<div className="content">
							<a className="header">{result.title}</a>
							<div className="meta">
								<span className="date">Joined in 2013</span>
							</div>
							<div className="description">
								Kristy is an art director living in New York.
							</div>
						</div>
						<div className="extra content">
							<a>
								<i className="user icon" />
								22 Friends
							</a>
						</div>
					</div>
				</div>
			);
		});

		return (
      <div className="ui container">
				<div className="ui grid">
					<div className="three column row">
						{allItems}
					</div>
				</div>
      </div>
    );
  }
}

export default App;
