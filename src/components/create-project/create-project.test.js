import React from 'react';
import ReactDOM from 'react-dom';
import CreateProject from './index';
import store from '../../store';
import { Provider } from 'react-redux';

describe('Create Project component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><CreateProject /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
