import React from 'react';
import AppStack from '@lusiaves/navigation/AppStack';
import { Provider } from 'react-redux';
import Store from '@lusiaves/store/configStore';
// eslint-disable-next-line no-unused-vars
import i18n from '@lusiaves/translations/i18n';

const App = () => {
  return (
    <Provider store={Store}>
      <AppStack />
    </Provider>
  );
};

export default App;
