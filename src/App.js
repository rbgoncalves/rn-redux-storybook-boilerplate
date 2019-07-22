import React from 'react';
import AppStack from '@lusiaves/navigation/AppStack';
import { Provider } from 'react-redux';

// import gStyles from '@lusiaves/styles/globalStyles';
import Store from '@lusiaves/store/configStore';

const App = () => {
  return (
    <Provider store={Store}>
      <AppStack />
    </Provider>
  );
};

export default App;
