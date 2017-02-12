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
			],

			price: {
				value: ''
			}
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

		// If we have images uploaded
		if (this.state.product.images.length >= 1 ) {
			let index = 0;

			_.forEach(this.state.product.images, function(value) {
				gallery[index] = {
					original: value.url.https,
					thumbnail: value.url.https
				};
				index++;
			});
		}

		else {
			gallery[0] = {
				original: 'https://placehold.it/1000x1000',
				thumbnail: 'https://placehold.it/1000x1000'
			}
		}


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
							<h1>{this.state.product.title} <span className="price">{this.state.product.price.value}</span></h1>
							<p>{this.state.product.description}</p>
							<button className="fluid ui button"><i className="add to cart icon"></i>Add to Cart</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
