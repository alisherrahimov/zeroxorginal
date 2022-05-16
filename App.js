import React, {useEffect, useState} from 'react';
import './src/i18n/index';
import {
  StatusBar,
  ImageBackground,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {Logo} from './src/helper/drawerIcon';
import Navigation from './src/navigation/Navigation';
import {Store} from './src/store/store/Store';
import {style} from './src/theme/style';

StatusBar.setBackgroundColor('rgba(0,0,0,0)');
StatusBar.setBarStyle('dark-content');
StatusBar.setTranslucent(true);
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return <Enter />;
  }

  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
};

const Enter = () => {
  return (
    <SafeAreaView style={[styles.container]}>
      <ImageBackground
        style={styles.ImageBackground}
        resizeMode="cover"
        source={require('./src/images/backtwopeople.png')}>
        <View style={styles.logoContainer}>
          <Logo width="50%" height="50%" />
          <Text style={styles.ishonch}>Ishonch kafolati</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ImageBackground: {
    width: style.width,
    height: style.height,
  },
  logoContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ishonch: {
    fontSize: style.fontSize.xs + 2,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
});
