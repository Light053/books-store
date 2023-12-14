import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from "react-redux";

import Home from "../pages/home-page/home";
import Cart from "../pages/cart-page/cart";
import ShopHeader from "../shop-header/shop-header";
import AuthorPage from "../pages/author-page/author-page";

import './app.css'

const App = ({ numItems, total }) => {

	return (
		<main role="main" className="container">
			<Router>
				<ShopHeader numItems={numItems} total={total} />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/author/:id?" element={<AuthorPage />} />
				</Routes>
			</Router>
		</main>
	);
};

const mapStateToProps = (state) => {
	return {
		numItems: state.cartItems.length,
		total: state.orderTotal
	}
}


export default connect(mapStateToProps)(App);
