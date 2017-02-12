import React from 'react'
import moltin from '../vendor/moltin';
import ImageGallery from 'react-image-gallery';
import _ from 'lodash'


export default class Product extends React.Component {
	state = {
		id: this.props.location.pathname.replace('/product/', ''), // remove string '/product/' from the url and use the id only
		loaded: false,
		product: {
			images: [
				{
					url: ''
				}
			]
		},
	};

	componentDidMount() {
		let _this = this;

		moltin.Authenticate(function() {
			_this.setState({
				product: moltin.Product.Get(_this.state.id),
			});
		});
	}

	handleImageLoad(event) {
		console.log('Image loaded ', event.target)
	}

	render() {

		//initialize an empty gallery array.
		const gallery = [];

		let index = 0;
		_.forEach(this.state.product.images, function(value) {
			gallery[index] = {
				original: value.url.https,
				thumbnail: value.url.https
			};
			index++;
		});


		return (
			<div className="product-container">
				<div className="ui grid">
					<div className="ten wide column">
						<ImageGallery
							thumbnailPosition={'left'}
							showNav={false}
							showPlayButton={false}
							slideOnThumbnailHover={true}
							items={gallery}
							slideInterval={2000}
							onImageLoad={this.handleImageLoad}/>
					</div>
					<div className="six wide column">
						<div className="product-details">
							<h1>{this.state.product.title}</h1>
							<p>{this.state.product.description}</p>
							<span className="price"><i className="euro icon"></i>{this.state.product.sale_price}</span>
							<button className="fluid ui button teal"><i className="add to cart icon"></i>Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
