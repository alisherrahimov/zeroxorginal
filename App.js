import React, {useEffect, useState} from 'react';
import './src/i18n/index';
import {
  StatusBar,
  ImageBackground,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  LogBox,
} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {Logo} from './src/helper/drawerIcon';
import Navigation from './src/navigation/Navigation';
import {Store} from './src/store/store/Store';
import {style} from './src/theme/style';
import {useNetInfo} from '@react-native-community/netinfo';
import LottieView from 'lottie-react-native';
import './src/store/api/token/getToken';

LogBox.ignoreLogs([
  'ViewPropTypes will be removed',
  'ColorPropType will be removed',
]);
StatusBar.setBackgroundColor('rgba(0,0,0,0)', true);
StatusBar.setBarStyle('dark-content');
StatusBar.setTranslucent(true);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [check, setCheck] = useState(false);
  const netInfo = useNetInfo();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  useEffect(() => {
    checkInternet();
  }, [netInfo]);
  const checkInternet = () => {
    if (netInfo.isConnected) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };
  if (isLoading) {
    return <Enter />;
  }
  if (!check) {
    return <NoInternet onCheckInternet={checkInternet} />;
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
const NoInternet = ({onCheckInternet}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <LottieView
        source={require('./src/images/noconnection.json')}
        autoPlay
        resizeMode="cover"
        style={{width: style.width / 1.5, height: style.height / 2.8}}
      />
      <Text
        style={{
          fontSize: style.fontSize.xx,
          color: style.textColor,
          fontFamily: style.fontFamilyMedium,
          marginTop: 20,
        }}>
        Internetga ulanishda xatolik yuz berdi !
      </Text>
      <TouchableOpacity
        onPress={onCheckInternet}
        activeOpacity={0.8}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          paddingLeft: 30,
          paddingRight: 30,
          paddingTop: 20,
          paddingBottom: 20,
          backgroundColor: style.blue,
          borderRadius: 10,
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: style.fontSize.xs,
            color: '#fff',
            fontFamily: style.fontFamilyMedium,
          }}>
          Yangilash
        </Text>
      </TouchableOpacity>
    </View>
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
