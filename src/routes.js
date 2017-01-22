import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import Home from './components/Home';
import Product from './components/Product';
import Checkout from './components/Checkout'

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home}/>
		<Route path="product" component={Product}/>
		<Route path="product/:id" component={Product}/>
		<Route path="checkout" component={Checkout}/>
	</Route>
);

export default routes;
