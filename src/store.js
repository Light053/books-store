import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './reducers/reducer';
import thunk from 'redux-thunk';

const logMiddleware = (store) => (next) => (action) => {
	console.log(action.type);
	return next(action);
};

const stringMiddleware = (store) => (dispatch) => (action) => {
	if (typeof action === 'string') {
		return dispatch({
			type: action,
		});
	}
	return dispatch(action);
};

const store = configureStore({
	reducer: booksSlice.reducer,
	middleware: [thunk, stringMiddleware, logMiddleware]
});

const myAction = () => (dispatch) => {
	setTimeout(() => dispatch({
		type: 'DELAYED_ACTION'
	}), 2000);
};

store.dispatch(myAction())

export default store;
