import React from 'react';
import ReactDOM from 'react-dom';
import ProjectDetails from './index';
import store from '../../store';
import { Provider } from 'react-redux';

describe('Project Details component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><ProjectDetails project={{tasks: []}} /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
