import { createContext } from 'react';
import BookStoreService from '../../services/bookstore-service'

const BookContext = createContext()
export {
	BookContext
}

const BookStoreServiceContext = ({ children }) => {
	const sharedValue = new BookStoreService();

	return (
		<BookContext.Provider value={sharedValue}>
			{children}
		</BookContext.Provider>
	)
}

export default BookStoreServiceContext;