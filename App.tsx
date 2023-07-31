/* eslint-disable prettier/prettier */

import React from 'react';
import AppNavigation from './navigation/AppNavigation';
import { Provider } from 'react-redux';
import store from './redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
