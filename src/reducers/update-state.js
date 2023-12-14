function updateCartItems(cartItems, item, idx) {
	if (item.count <= 0) {
		return [
			...cartItems.slice(0, idx),
			...cartItems.slice(idx + 1)
		]
	}

	if (idx < 0) {
		return cartItems = [...cartItems, item];
	} else {
		return cartItems = [
			...cartItems.slice(0, idx),
			item,
			...cartItems.slice(idx + 1)
		];
	}
}

function updateCartItem(item, newItem, book, quantity) {


	if (item) {
		return newItem = {
			...item,
			count: item.count + quantity,
			total: item.total + quantity * book.price,
		};
	} else {
		return newItem = {
			id: book.id,
			title: book.title,
			count: 1,
			total: book.price
		};
	}
}


function updateOrderTotal(cartItems) {
	return cartItems.reduce((acc, item) => {
		return acc + item.total
	}, 0)
}


export default function updateOrder(state, bookID, quantity) {
	const book = state.books.find(book => book.id === bookID);
	const itemIndex = state.cartItems.findIndex(({ id }) => id === book.id);
	const item = state.cartItems[itemIndex];

	let newItem = updateCartItem(item, null, book, quantity);
	const updatedCartItems = updateCartItems(state.cartItems, newItem, itemIndex);

	const orderTotal = updateOrderTotal(updatedCartItems);

	return {
		...state,
		cartItems: updatedCartItems,
		orderTotal: orderTotal
	};
}


