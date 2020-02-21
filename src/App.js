import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';
import Routes from './routes';

import './css/dashboard.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes></Routes>
      </Provider>
    );
  }
}

export default App;
