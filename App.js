import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from './app/store';
import NetworkClient from './app/services/NetworkClient';
import { PersistGate } from 'redux-persist/integration/react';
import AppContainer from './app/screens';
export const { store, persistor } = configureStore({}, [thunk.withExtraArgument(NetworkClient)]);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StatusBar barStyle="light-content" translucent={true} />
      <AppContainer />
    </PersistGate>
  </Provider>
);

export default App;
