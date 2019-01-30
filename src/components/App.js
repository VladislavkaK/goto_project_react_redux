import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
// import '../styles/App.css';
import '../styles/App.scss';

import Container from '../containers/Container';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <h1>goto тренировка</h1>
            <Container />
        </div>
      </Provider>
    );
  }
}

export default App;
