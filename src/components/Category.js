import React from 'react';
import ProductList from '../components/ProductList'
import { observer } from 'mobx-react';

@observer(['products'])
export default class Category extends React.Component {
	state = {
		id: this.props.location.pathname.replace('/category/', ''), // remove string '/product/' from the url and use the id only
	};

	render() {
		return (
			<div className="category-page">
				<div className="header">
					<h1>Men Bags</h1>
				</div>

				<div className="body">
					<ProductList category={this.state.id} size="four"/>
				</div>
			</div>
		);
	}
}
