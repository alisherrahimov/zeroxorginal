import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {style} from '../../theme/style';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import WomenAndPc from '../../images/womenandpc.svg';
const SelectJuridical = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.BackButton}>
        <BackButton
          navigation={navigation}
          IconColor="#fff"
          backgroundColor={style.blue}
        />
      </View>
      <View style={styles.imageContainer}>
        <WomenAndPc width="50%" height="50%" />
      </View>
      <View style={styles.main}>
        <Text style={styles.registerText}>Avtorizatsiya</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RegisterWithJuridic');
          }}
          activeOpacity={0.8}
          style={[styles.registerButton, {marginBottom: 10}]}>
          <Text style={styles.textButton}>Yuridik shaxs sifatida </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginWithPhone');
          }}
          activeOpacity={0.8}
          style={styles.registerButton}>
          <Text style={styles.textButton}>Jismoniy shaxs sifatida </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SelectJuridical;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textButton: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: '#fff',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  registerButton: {
    width: '85%',
    height: style.buttonHeight,
    backgroundColor: style.blue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    fontSize: style.fontSize.xs,
    fontFamily: style.fontFamilyBold,
    color: style.textColor,
  },
  main: {
    alignSelf: 'center',
  },
  BackButton: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 15,
    zIndex: 1,
    marginTop: Platform.OS === 'android' ? 40 : null,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
