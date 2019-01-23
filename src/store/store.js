import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers/reducers';

let reduxMiddlewares = [];
reduxMiddlewares.push(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTESION_COMPOSE || compose;
let store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...reduxMiddlewares)));

export default store;