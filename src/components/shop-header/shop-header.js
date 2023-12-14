import React from 'react';
import { Link } from "react-router-dom";
import './shop-header.css';

const ShopHeader = ({ numItems, total }) => {
	return (
		<header className="shop-header p-3">
			<Link to={'/'}>
				<div href="#" className="navbar-brand text-dark logo">Books Store</div>
			</Link>
			<Link to={'/cart'}>
				<div href="#" className="cart-link text-dark">
					<i className="bi bi-cart-fill"></i>
					{numItems} items (${total})
				</div>
			</Link>

		</header>
	);
};

export default ShopHeader;
