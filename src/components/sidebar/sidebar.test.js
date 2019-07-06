import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './index';
import store from '../../store';
import { Provider } from 'react-redux';

describe('Sidebar component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><Sidebar /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
