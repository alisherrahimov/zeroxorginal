import React from 'react';
import {StatusBar, LogBox} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Navigation from './src/navigation/Navigation';
import {Store} from './src/store/store/Store';
LogBox.ignoreLogs(['Setting a timer']);
StatusBar.setBackgroundColor('#fff');
StatusBar.setBarStyle('dark-content');
const App = () => {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
};
export default App;
