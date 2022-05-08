import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Logo from '../../images/logo.svg';
import {style} from '../../theme/style';
const EnterScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.container]}>
      <ImageBackground
        style={styles.ImageBackground}
        resizeMode="cover"
        source={require('../../images/backtwopeople.png')}>
        <View style={styles.logoContainer}>
          <Logo width="50%" height="50%" />
          <Text
            onPress={() => {
              navigation.navigate('SelectLanguageScreen');
            }}
            style={styles.ishonch}>
            Ishonch kafolati
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default EnterScreen;

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
