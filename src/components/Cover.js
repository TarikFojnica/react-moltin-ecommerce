import React from 'react';
import moltin from '../vendor/moltin';
import {Link} from 'react-router';
import LoadingIcon from '../../public/ripple.svg';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AddToCartButton from '../components/AddToCartButton';
import config from '../vendor/config'

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
		featured_category: config.featuredCategoryId, // ID of the category we use in the FEATURED section of the site,
		adding: false,
		featuredAcquired: false
	};

	componentDidMount() {
		let _this = this;

		// Get the featured product
		moltin.Authenticate(() => {
			moltin.Product.Search({category: _this.state.featured_category, status: '1'}, function(products) {
				_this.setState({
					products : products, // all the products from the category
					lastProduct: products[products.length - 1], // since we display only one item, let's take the newest one
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
				<div className={`overlay ${this.state.featuredAcquired ? 'non-visible' : ''}`}>
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

							<AddToCartButton additionalClass="inverted" productId={this.state.lastProduct.id}/>
							<Link className="ui inverted button" to={`/product/${this.state.lastProduct.id}`}>Details</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
