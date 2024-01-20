// store.js

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

// Save state to local storage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Error saving state to local storage:', err);
  }
};

// Load state from local storage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading state from local storage:', err);
    return undefined;
  }
};

const middleware = (store) => (next) => (action) => {
  const result = next(action);
  // Save the state to local storage after each action
  saveState(store.getState());
  return result;
};

const store = createStore(rootReducer, loadState(), applyMiddleware(middleware));

export default store;
