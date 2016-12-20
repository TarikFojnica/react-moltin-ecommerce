import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moltin from './moltin';

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
					<h3 className="uk-panel-title">{result.title}</h3>
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
