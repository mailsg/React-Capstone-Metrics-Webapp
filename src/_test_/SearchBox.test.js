import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import SearchBox from '../components/SearchBox';

describe('SearchBox', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <SearchBox />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
