import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { BookContext } from '../../bookstore-service-context/bookstore-service-context';
import { getBooks } from '../../book-list/get-books';
import { GET_AUTHOR_INFO, FETCH_BOOKS_SUCCES, FETCH_BOOKS_ERROR } from "../../../actions/actions";
import Spinner from "../../spinner/spinner";

import './author-page.css';

const AuthorPage = ({ authorInfo, getAuthor, books, loadBooks, booksError }) => {
	const booksStoreService = useContext(BookContext);
	const { id } = useParams();

	useEffect(() => {
		if (books.length === 0) {
			getBooks(booksStoreService, loadBooks, booksError);
		} else {
			getAuthor(id);
		}
	}, [books, booksStoreService, loadBooks, booksError, getAuthor, id]);

	const { image, name, birthDate, nationality, bio } = authorInfo;

	if (!image) {
		return (
			<div className="spinner">
				<Spinner />
			</div>
		);
	}

	return (
		<div className="author-info">
			<div className="author-image">
				<img src={image} alt="image of author" />
			</div>
			<div className="author-details">
				<p className="author-name">{name}</p>
				<p className="author-bd">Birth Date: {birthDate}</p>
				<p className="author-nationality">Nationality: {nationality}</p>
				<p className="author-bio">Biography: {bio}</p>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		authorInfo: state.authorInfo,
		books: state.books
	};
};

const mapDispatchToProps = {
	getAuthor: (id) => GET_AUTHOR_INFO(id),
	loadBooks: (newBooks) => FETCH_BOOKS_SUCCES({ books: newBooks }),
	booksError: (newError) => FETCH_BOOKS_ERROR({ error: newError })
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);
