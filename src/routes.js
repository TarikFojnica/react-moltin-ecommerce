import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import Home from './components/Home';
import Product from './components/Product';

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home}/>
		<Route path="product" component={Product}/>
	</Route>
);

export default routes;
