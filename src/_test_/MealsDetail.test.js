import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import MealsDetail from '../components/MealsDetail';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error occurred. Please check the console for details.</div>;
    }

    return this.props.children;
  }
}

describe('MealsDetail', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <ErrorBoundary> 
              <MealsDetail />
            </ErrorBoundary>
          </Router>
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
