import React from 'react'
import moltin from '../vendor/moltin';
import ImageGallery from 'react-image-gallery';
import _ from 'lodash'
import LoadingIcon from '../../public/ripple.svg'
import { Accordion, Icon } from 'semantic-ui-react'


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
		let _this = this;

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
				thumbnail: 'https://placehold.it/1000x1000'
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
								<button className="fluid ui button"><i className="add to cart icon"></i>Add To Cart</button>

								<p>{this.state.product.description}</p>
								<Accordion styled defaultActiveIndex={0}>
									<Accordion.Title>
										<Icon name='dropdown' />
										Details & Dimensions
									</Accordion.Title>
									<Accordion.Content>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at augue et risus scelerisque finibus nec vitae velit. Praesent consectetur nibh aliquet m
										</p>
									</Accordion.Content>
									<Accordion.Title>
										<Icon name='dropdown' />
										Delivery
									</Accordion.Title>
									<Accordion.Content>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at augue et risus scelerisque finibus nec vitae velit. Praesent consectetur nibh aliquet m
										</p>
									</Accordion.Content>
									<Accordion.Title>
										<Icon name='dropdown' />
										Components
									</Accordion.Title>
									<Accordion.Content>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at augue et risus scelerisque finibus nec vitae velit. Praesent consectetur nibh aliquet m
										</p>
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
