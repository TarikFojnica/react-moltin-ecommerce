import React from 'react';
import moltin from '../vendor/moltin';
import events from '../vendor/pub-sub';
import {Link} from 'react-router'
import LoadingIcon from '../../public/ripple.svg'

export default class Cover extends React.Component {
	state = {
		products: null,
		lastProduct : {
			featured_large : {
				value: '',
				data : {
					url : {
						http: '',
						https: ''
					}
				}
			},
			price : {
				value: ''
			}
		},
		featured_category: '1415212879321235847', // ID of the category we use in the FEATURED section of the site,
		adding: false,
		featuredAcquired: false
	};

	addToCart = (clicked) => {
		let _this = this;
		this.setState({
			clickedId: clicked,
			adding: true
		});

		moltin.Authenticate(function() {
			moltin.Cart.Insert(clicked.id, '1', null, function(cart) {
				console.log('a', cart);
				events.publish('ADD_TO_CART');
				_this.setState({
					adding: false
				})

			}, function(error) {
				console.log(error);
			});
		});
	};

	componentDidMount() {
		let _this = this;

		// Get the featured product
		moltin.Authenticate(function() {
			moltin.Product.Search({category: _this.state.featured_category, status: '1'}, function(products) {
				_this.setState({
					products : products, // all the products from the category
					lastProduct: products[products.length - 1], // since we display only the last item, let's take the newest one
					featuredAcquired: true // The featured product is loaded
				});
			}, function(error) {
				// Something went wrong...
			});
		})
	}

	render() {

		const backgroundImage = {
			backgroundImage: 'url(' + this.state.lastProduct.featured_large.data.url.https + ')',
		};

		return (
			<div className="cover" style={backgroundImage}>
				<div className={`overlay ${this.state.featuredAcquired ? 'hidden' : ''}`}>
					<img src={LoadingIcon} alt="Loading"/>
				</div>
				<div className="cover-inner">
					<div className="content">
						<div className="inner">
							<h1>{this.state.lastProduct.title}</h1>
							<p>{this.state.lastProduct.description}</p>
							<span className="price">
							{this.state.lastProduct.price.value}
						</span>
							<button className={`ui inverted button ${this.state.adding ? 'disabled' : ''}`} onClick={() => { this.addToCart(this.state.lastProduct)}}>
								<i className="add to cart icon"></i> Add to Cart
							</button>
							<Link className="ui inverted button" to={`/product/${this.state.lastProduct.id}`}>Details</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
