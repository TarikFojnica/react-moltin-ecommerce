import React from 'react'
import ImageGallery from 'react-image-gallery';
import _ from 'lodash'
import { Accordion, Icon } from 'semantic-ui-react';
import AddToCartButton from '../components/AddToCartButton';
import { observer } from 'mobx-react';
import moltin from '../vendor/moltin';
import {Helmet} from "react-helmet";

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
		productsByTag: [],
		galleryLoaded: false
	};

	// Retrieve all the products with common tag. Used for displaying all the possible color options
	getAllByColor(tag) {
		let allItems = 0;
		let  _this;

		moltin.Authenticate(function() {
			allItems = _this.props.products.products.filter (function (obj) {
				return obj.tag == tag;
			});
		});

		return allItems;
	}

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

			setTimeout(() => {
				moltin.Authenticate(function() {
					_this.setState({
						productsByTag: _this.props.products.products.filter (function (obj) {
							return obj.tag == _this.state.product.tag
						})
					})
				});
			}, 100)
		}

		// If not, make a new API request and update the global state. This will be called mostly when a product is open directly
		// from a url
		else {
			let _this = this;
			moltin.Authenticate(function() {
				moltin.Product.Get(_this.state.id, function(product) {
					_this.setState({
						product: product,
					});

					moltin.Product.List({limit: 50}, function(products) {
						// Update the global state
						_this.props.products.products = products;
					}, function(error) {
						// Something went wrong...
					});

				}, function(error) {
					// Something went wrong...
				});

			});
		}
	}

	slideToImg = (index) => {
		this._imageGallery.slideToIndex(index);
	};

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

		let productsByTag = this.state.productsByTag.map((result, id) => {
			console.log(result);
			return(
				<div key={id} className={`color-element ${result.default_color.data.key}`}>
					<input type="radio" id={`color-${id}`} name="radios" value={`value-${id}`} />
					<label className={`btn ${result.default_color.data.key}`} htmlFor={`color-${id}`}><div onClick={() => this.slideToImg(0)} className="border-div"></div></label>
				</div>
			)
		});

		return (
			<div className="product-container">
				<Helmet>
					<title>{`Kanmer | ${this.state.product.title}`}</title>
				</Helmet>

				<div className="top">
					<div className="ui grid stackable">
						<div className="ten wide column">
							{/*<div className="overlay">*/}
							{/*<img src={LoadingIcon} alt="Loading"/>*/}
							{/*</div>*/}

							<div className="no-overflow">
								<ImageGallery
									thumbnailPosition={'bottom'}
									showNav={true}
									showPlayButton={false}
									slideOnThumbnailHover={true}
									items={gallery}
									slideInterval={2000}
									onImageLoad={this.handleImageLoad}
									ref={a => this._imageGallery = a}
								/>
							</div>
						</div>
						<div className="six wide column">
							<div className="product-details">
								<h1>{this.state.product.title} <span className="price">{this.state.product.price.value}</span></h1>
								<AddToCartButton text={this.state.product.stock_level === 0 ? 'Out of Stock' : 'Add To Cart'} additionalClass={`fluid ui button ${this.state.product.stock_level === 0 ? 'disabled' : ''}`} productId={this.state.product.id}/>

								<div className="color-selection">
									<span className="title">Color Selection</span>
									<div className="radio-toolbar">
										{productsByTag}
									</div>
								</div>
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
			</div>
		);
	}
}
