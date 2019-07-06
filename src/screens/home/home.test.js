import React from 'react';
import renderer from 'react-test-renderer';
import Home from './index';
import { Provider } from 'react-redux';
import store from '../../store';

it('Testing Home Component', async () => {
  const tree = await renderer
    .create(
      <Provider store={store}>
        <Home getProjects={() => []} />
      </Provider>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

