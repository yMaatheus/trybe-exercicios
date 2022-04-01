import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import myReducer from '../reducers/myReducer';
import listReducer from '../reducers/listReducer';

const rootReducer = combineReducers({ listReducer, myReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;