import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moltin from './moltin';
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
		console.log(this.state.data[0]);
		let allItems = this.state.data.map(function(result, id) {
			let images = result.images.map(function(image, imageID) {
				return (
					<img src={image.url.http} key={imageID}/>

				)
			});
			return (
				<div key={id}>
					{images}
					<div className="ui card" key={id}>
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
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React {}</h2>
					<button>Log me</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
				{allItems}
      </div>
    );
  }
}

export default App;
