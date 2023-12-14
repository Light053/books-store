import React from 'react';
import { useSelector } from 'react-redux';
import './cart.css'; // Импорт файла с CSS
import CartItem from './cart-item';

const Cart = () => {
	const allBooks = useSelector(state => state.books);
	const myBooks = useSelector(state => state.cartItems);
	if (myBooks.length === 0) {
		return (
			<div className="empty-basket-message">
				Your basket is empty!
				<div className="empty-basket-image">
					<i className="bi bi-cart2"></i>
				</div>
			</div>
		);
	}

	return (
		<div>
			<ul>
				{myBooks.map(book => {
					let bookInBasket = allBooks.find(item => item.id === book.id);
					bookInBasket = { ...bookInBasket, count: book.count }
					console.log(bookInBasket);
					if (bookInBasket) {
						return <li
							className='list-item'
							key={book.id}>
							<CartItem item={bookInBasket} />
						</li>
					}
				}
				)}
			</ul>
		</div>
	);
};

export default Cart;
