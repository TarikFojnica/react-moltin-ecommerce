import React from 'react'
import moltin from '../vendor/moltin';

export default class Product extends React.Component {
	state = {
		id: this.props.location.pathname.replace('/product/', ''), // remove string '/product/' from the url
		loaded: false,
		product: {
			images: [
				{
					url: '' // Not sure why, but can't access the images array otherwise. Maybe will investigate. Maybe.
				}
			]
		}
	};

	componentDidMount() {
		let _this = this;

		moltin.Authenticate(function() {
			_this.setState({
				product: moltin.Product.Get(_this.state.id),
			})
		});
	}

	render() {
		console.log(this.state.product.images[0].url.http)
		{/*let image =  this.state.product.images.map(function(result, id) {*/}
		// 	return(
		// 		<div>
		// 			{result}
		// 		</div>
		// 	)
		// });

		return (
			<div className="product-container">
				<div className="ui container">
					<div className="ui grid">
						<div className="eight wide column">
							<div className="preview-image">
								<img src={this.state.product.images[0].url.http} alt=""/>
							</div>
						</div>
						<div className="eight wide column">abc</div>
					</div>
				</div>
			</div>
		);
	}
}
