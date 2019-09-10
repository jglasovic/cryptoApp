import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from '../redux/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const configureStore = (initialState = {}, additionalMiddlewares = []) => {
  const middlewares = additionalMiddlewares;

  if (__DEV__) {
    const reduxLogger = createLogger({ collapsed: true });
    middlewares.push(reduxLogger);
  }

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(persistedReducer, initialState, composedEnhancers);
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
