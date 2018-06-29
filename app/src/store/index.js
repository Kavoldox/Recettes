/**
 * NPM import
 */
import { createStore, compose, applyMiddleware } from 'redux';

/**
 * Local import
 */
import reducer from './reducer';
import DataLoader from './middlewares/DataLoader';

/**
 * Code
 */
// DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}
const DataLoaderMW = applyMiddleware(DataLoader);
const enhancers = compose(DataLoaderMW, ...devTools);

const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
