import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools());

// save state in local storage on every state change
store.subscribe(() => localStorage.setItem('dictApp', JSON.stringify(store.getState())));
