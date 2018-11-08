/**
 * Simple React Native + Redux Counter (REDUX SAMPLE)
 * https://github.com/aFaneca
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Counter from './screens/Counter';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; // Provider - high order component
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import Router from "./Router";

// cria o application state
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers); 

const App = () => {
  return (
    <Provider store = {store} >
        <Router />
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});
export default App;
