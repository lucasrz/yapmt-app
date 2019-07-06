import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './index';
import store from '../../store';
import { Provider } from 'react-redux';

describe('Task list component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><TaskList /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
