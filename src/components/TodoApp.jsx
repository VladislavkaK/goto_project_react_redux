import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
// import '../styles/App.css';
import '../styles/App.scss';

import Container from '../containers/Container';

class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="TodoApp">
            <h1 style={{textAlign:"center"}}>TodoList нового поколения</h1>
            <Container />
        </div>
      </Provider>
    );
  }
}

export default TodoApp;
