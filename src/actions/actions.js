import { createAction } from '@reduxjs/toolkit';

export const FETCH_BOOKS_SUCCES = createAction('booksStore/FETCH_BOOKS_SUCCES', ({ books }) => ({
	payload: {
		books
	}
}))

export const FETCH_BOOKS_ERROR = createAction('booksStore/FETCH_BOOKS_ERROR', ({ error }) => ({
	payload: {
		error
	}
}))

export const BOOK_ADDED_TO_CART = createAction('booksStore/BOOK_ADDED_TO_CART', (id) => ({
	payload: {
		id,
	}
}))

export const BOOK_REMOVE_FROM_CART = createAction('booksStore/BOOK_REMOVE_FROM_CART', (id) => ({
	payload: {
		id,

	}
}))


export const ALL_BOOK_REMOVE_FROM_CART = createAction('booksStore/ALL_BOOK_REMOVE_FROM_CART', (id) => ({
	payload: {
		id,

	}
}))

export const GET_AUTHOR_INFO = createAction('booksStore/GET_AUTHOR_INFO', (id) => ({
	payload: {
		id
	}
}))