import React from 'react';
import App from 'App';
//import ReactCalculator from './src/ReactCalculator';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  //const rendered = renderer.create(<ReactCalculator />).toJSON();
  expect(rendered).toBeTruthy();
});
