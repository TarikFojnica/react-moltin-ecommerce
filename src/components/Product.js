import React from 'react'
import moltin from '../vendor/moltin';
import ImageGallery from 'react-image-gallery';


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
		}
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
		//this.state.product.images[0].url.http

		console.log('state prod', this.state.product);

		const images = [
			{
				original: 'http://lorempixel.com/1000/800/nature/1/',
				thumbnail: 'http://lorempixel.com/250/150/nature/1/',
			},
			{
				original: 'http://lorempixel.com/1000/800/nature/2/',
				thumbnail: 'http://lorempixel.com/250/150/nature/2/'
			},
			{
				original: 'http://lorempixel.com/1000/800/nature/3/',
				thumbnail: 'http://lorempixel.com/250/150/nature/3/'
			}
		]

		return (
			<div className="product-container">
				<div className="ui grid">
					<div className="ten wide column">
						<ImageGallery
							thumbnailPosition={'left'}
							showNav={false}
							showPlayButton={false}
							slideOnThumbnailHover={true}
							items={images}
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
