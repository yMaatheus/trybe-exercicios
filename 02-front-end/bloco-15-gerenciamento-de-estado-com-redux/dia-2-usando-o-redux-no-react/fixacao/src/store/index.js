import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import myReducer from '../reducers/myReducer';

const rootReducer = combineReducers({ myReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;