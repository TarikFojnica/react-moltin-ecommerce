import React from 'react';
import {Link} from 'react-router';
import LoadingIcon from '../../public/ripple.svg';
import AddToCartButton from '../components/AddToCartButton';
import config from '../vendor/config';
import { observer } from 'mobx-react';

@observer(['featured'])
export default class Cover extends React.Component {
	state = {
		featured_category: config.featuredCategoryId, // ID of the category we use in the FEATURED section of the site,
		adding: false,
	};

	componentDidMount() {
		let _this = this;

		if (this.props.featured.featuredObject.featuredAcquired === true) {
			_this.setState({
				featuredAcquired: true
			})
		}

		else {
			_this.setState({
				featuredAcquired: true
			})
		}
	}

	render() {
		const backgroundImage = {
			backgroundImage: 'url(' + this.props.featured.featuredObject.featured_large.data.url.https + ')',
		};

		return (

			<div className="cover" style={backgroundImage}>
				<div className="cover-inner">
					<div className="content">
						<div className="inner">
							<h1>{this.props.featured.featuredObject.title}</h1>
							<p>{this.props.featured.featuredObject.description}</p>
							<span className="price">
								{this.props.featured.featuredObject.price.value}
						</span>

							<AddToCartButton additionalClass="inverted" productId={this.props.featured.featuredObject.id} text="Add To Cart"/>
							<Link className="ui inverted button" to={`/product/${this.props.featured.featuredObject.id}`}>Details</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
