import React from 'react';
import ProductList from '../components/ProductList'

export default class Category extends React.Component {
	render() {
		return (
			<div className="category-page">
				<div className="header">
					<h1>Men Bags</h1>
				</div>

				<div className="body">
					<ProductList size="four"/>
				</div>
			</div>
		);
	}
}
