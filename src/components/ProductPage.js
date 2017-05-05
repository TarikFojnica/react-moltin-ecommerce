import React from 'react'
import ImageGallery from 'react-image-gallery';
import _ from 'lodash'
import { Accordion, Icon } from 'semantic-ui-react';
import AddToCartButton from '../components/AddToCartButton';
import ProductList from '../components/ProductList';
import { observer } from 'mobx-react';
import moltin from '../vendor/moltin';

@observer(['products', 'featured'])
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
		galleryLoaded: false
	};

	componentDidMount() {
		let _this = this;

		// If the products are already loaded in our global state
		if (this.props.products.products.length >= 1) {
			let currentItem = this.props.products.products.filter (function (obj) {
				return obj.id == _this.state.id;
			});

			_this.setState({
				product: currentItem[0],
			});
		}

		// If not, make a new API request and update the global state. This will be called mostly when a product is open directly
		else {
			let _this = this;
			moltin.Authenticate(function() {
				moltin.Product.List(null, function(products) {
					// Update the global state
					_this.props.products.products = products;
					console.log(products[0].category.data);

					// Extract the current item from the list of loaded items
					let currentItem = _this.props.products.products.filter (function (obj) {
						return obj.id == _this.state.id;
					});

					_this.setState({
						product: currentItem[0],
					});
				}, function(error) {
					// Something went wrong...
				});
			});
		}
	}

	render() {
		let _this = this;
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

				// If the gallery is completely loaded
				if (index === _this.state.product.images.length) {
					_this.state.galleryLoaded = true;
				}
			});
		}

		else {
			gallery[0] = {
				original: 'https://placehold.it/1000x1000',
				thumbnail: 'https://placehold.it/100x100'
			}
		}

		return (
			<div className="product-container">
				<div className="top">
					<div className="ui grid">
						<div className="ten wide column">
							{/*<div className="overlay">*/}
							{/*<img src={LoadingIcon} alt="Loading"/>*/}
							{/*</div>*/}

							<div className="no-overflow">
								<ImageGallery
									thumbnailPosition={'left'}
									showNav={false}
									showPlayButton={false}
									slideOnThumbnailHover={true}
									items={gallery}
									slideInterval={2000}
									onImageLoad={this.handleImageLoad}
								/>
							</div>
						</div>
						<div className="six wide column">
							<div className="product-details">
								<h1>{this.state.product.title} <span className="price">{this.state.product.price.value}</span></h1>
								<AddToCartButton additionalClass="fluid ui button" productId={this.state.product.id}/>

								<Accordion styled defaultActiveIndex={0}>
									<Accordion.Title>
										<Icon name='dropdown' />
										Product Description
									</Accordion.Title>
									<Accordion.Content>
										<p>
											{this.state.product.description}
										</p>
									</Accordion.Content>
									<Accordion.Title>
										<Icon name='dropdown' />
										Delivery
									</Accordion.Title>
									<Accordion.Content>
										<p>{this.state.product.delivery}</p>
									</Accordion.Content>
									<Accordion.Title>
										<Icon name='dropdown' />
										Dimensions
									</Accordion.Title>
									<Accordion.Content>
										<ul className="dimensions">
											<li><span className="key">Width:</span> <span className="value">{this.state.product.width}</span> cm</li>
											<li><span className="key">Height:</span> <span className="value">{this.state.product.height}</span> cm</li>
										</ul>
									</Accordion.Content>
								</Accordion>
							</div>
						</div>
					</div>
				</div>

				<div className="bottom mt-l">
					<h4>More from Kanmer</h4>
				</div>
			</div>
		);
	}
}
