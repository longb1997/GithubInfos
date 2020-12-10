/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from '@navigation/AppContainer';
import { persistor, store } from '@redux/store';
import { PersistGate } from 'redux-persist/integration/react';
// console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContainer />
      </PersistGate>
    </Provider>
  );
};

export default App;
