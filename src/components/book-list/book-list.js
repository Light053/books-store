import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useContext } from 'react';

import { BookContext } from '../bookstore-service-context/bookstore-service-context';
import { FETCH_BOOKS_SUCCES, FETCH_BOOKS_ERROR, BOOK_ADDED_TO_CART } from '../../actions/actions';
import { getBooks } from './get-books';
import BookListItem from '../book-list-item/book-list-item';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

import './book-list.css'

const BookList = ({ books, onAddedToCart }) => {
	return (
		<div className='book-list'>
			<ul>
				{books.map(item => <li
					className='list-item'
					key={item.id}><BookListItem
						item={item}
						onAddedToCart={() => onAddedToCart(item)} /></li>)}
			</ul>
		</div>
	);
}


const BookListContainer = ({ books, loadBooks, loading, error, booksError, onAddedToCart }) => {
	const booksStoreService = useContext(BookContext);

	useEffect(() => {

		getBooks(booksStoreService, loadBooks, booksError)
	}, [loadBooks, booksStoreService, booksError]);

	if (loading) {
		return <div className='spinner'>
			<Spinner />
		</div>
	}

	if (error) {
		return <ErrorIndicator error={error} />
	}

	return <BookList books={books} onAddedToCart={onAddedToCart} />

}

const mapStateToProps = (state) => {
	return {
		books: state.books,
		loading: state.loading,
		error: state.error,
	}
}

const mapDispatchToProps = {
	loadBooks: (newBooks) => FETCH_BOOKS_SUCCES({ books: newBooks }),
	booksError: (newError) => FETCH_BOOKS_ERROR({ error: newError }),
	onAddedToCart: ({ id }) => BOOK_ADDED_TO_CART(id),
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListContainer);
