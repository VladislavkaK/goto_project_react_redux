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

// Если в localStorage есть сохраанение, берем их и..
let presistStore = {};
if (window.localStorage.getItem('store') !== null) {
    presistStore = JSON.parse(window.localStorage.getItem('store'));
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTESION_COMPOSE || compose;

// данные из presistStore подмешиваются к initState редьюсеров
let store = createStore(reducers, presistStore, composeEnhancers(applyMiddleware(...reduxMiddlewares)));

// Сохраняем store в localStorage при изменениях в store
store.subscribe(() => {
    const serializedStore = JSON.stringify(store.getState());
    // Стоит учесть, что испльзуя stringify возвращает строку
    // таким способом, не выйдет хранить объекты (ну например Date) и функции в localStorage
    window.localStorage.setItem('store', serializedStore);
})

export default store;