import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

// Mapping the state
const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
