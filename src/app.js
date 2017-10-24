/* @flow */

import React from "react";
import {applyMiddleware, compose, createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from '@redux/index';
import {Root} from "native-base";
import AppNavigator from './app-navigator';

// Load middleware
let middleware = [
  thunk, // Allows action creators to return functions (not just plain objects)
];

// Init redux store (using the given reducer & middleware)
const store = compose(
  applyMiddleware(...middleware),
)(createStore)(rootReducer);

export default () => {
  return (
    <Provider store={store}>
      <Root>
        <AppNavigator />
      </Root>
    </Provider>
  );
}
