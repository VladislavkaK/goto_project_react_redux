import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers/reducers';

// function thunkMiddleware({ dispatch, getState }) {
//   return next => action =>
//     typeof action === 'function' ? // Оу, dispatch получил функцию?
//       action(dispatch, getState) : // дайка я вызову ее передав ей dispatch и getState
//       next(action); // Ох, это обычный скучный экшн { type: 'BORING_ACTION', ... }, гуляй дальше (next)...
// }


let reduxMiddlewares = [];
reduxMiddlewares.push(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTESION_COMPOSE || compose;
let store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...reduxMiddlewares)));

export default store;