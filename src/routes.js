import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import Checkout from './components/Checkout';
import Category from './components/Category';
import AboutStaticPage from './components/StaticPages/About'

const routes = (
	<Route path="/" component={Layout}>
		<IndexRoute component={Home}/>
		<Route path="product/:id" component={ProductPage}/>
		<Route path="category/:id" component={Category}/>
		<Route path="checkout" component={Checkout}/>
		<Route path="about" component={AboutStaticPage}/>
	</Route>
);

export default routes;
