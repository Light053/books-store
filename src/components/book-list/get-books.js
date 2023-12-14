export const getBooks = async (booksStoreService, loadBooks, booksError) => {
	try {
		const books = await booksStoreService.getAllBooks();
		loadBooks(books);
	} catch (error) {
		booksError(error.message);
	}
};