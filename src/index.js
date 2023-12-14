import { createRoot } from 'react-dom/client';
import App from './components/app/app';
import store from './store';
import { Provider } from 'react-redux';
import BookStoreServiceContext from './components/bookstore-service-context/bookstore-service-context';

const root = createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<BookStoreServiceContext>
			<App />
		</BookStoreServiceContext>

	</Provider>
)