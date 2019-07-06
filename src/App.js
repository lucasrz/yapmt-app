import React, { Component }  from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Home from './screens/home';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Home></Home>
      </Provider>
    );
  }
}

