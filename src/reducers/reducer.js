import { createSlice } from '@reduxjs/toolkit';
import updateOrder from './update-state';

const booksSlice = createSlice({

	name: 'booksStore',
	initialState: {
		books: [],
		loading: true,
		error: null,
		cartItems: [],
		orderTotal: 0,
		authorInfo: []
	},
	reducers: {
		FETCH_BOOKS_ERROR: (state, action) => {
			state.loading = false;
			state.error = action.payload.error;
		},
		FETCH_BOOKS_SUCCES: (state, action) => {
			state.books = action.payload.books;
			state.loading = false;
		},
		BOOK_ADDED_TO_CART: (state, action) => {
			return updateOrder(state, action.payload.id, 1)
		},
		BOOK_REMOVE_FROM_CART: (state, action) => {
			return updateOrder(state, action.payload.id, -1)
		},
		ALL_BOOK_REMOVE_FROM_CART: (state, action) => {
			return updateOrder(state, action.payload.id, -100000)
		},
		GET_AUTHOR_INFO: (state, action) => {
			const id = action.payload.id;
			const authorInfo = state.books[id - 1].author;

			state.authorInfo = authorInfo
		}


	}
});

export default booksSlice;