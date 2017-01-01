import React from 'react';
import moltin from '../vendor/moltin';
import events from '../vendor/pub-sub'

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
		adding: false
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
		moltin.Authenticate(function() {
			moltin.Product.Search({category: _this.state.featured_category, status: '1'}, function(products) {
				_this.setState({
					products : products, // all the products from the category
					lastProduct: products[products.length - 1] // since we display only the last item, let's take the newest one
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

		console.log(this.state.lastProduct.price.value);

		return (
			<div className="cover" style={backgroundImage}>
				<div className="cover-inner">
					<div className="content">
						<h1>{this.state.lastProduct.title}</h1>
						<p>{this.state.lastProduct.description}</p>
						<span className="price">
							{this.state.lastProduct.price.value}
						</span>
						<button className="ui inverted teal button" onClick={() => (this.state.lastProduct.id)}>
							<i className="add to cart icon"></i> Add to Cart
						</button>
						<button className="ui inverted button">
							Details
						</button>
					</div>
				</div>
			</div>
		);
	}
}
