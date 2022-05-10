import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import {style} from '../../theme/style';
import RegisterWithJuridic from '../../images/auth/illustrationregisterwithpeople.svg';
import Uzbekistan from '../../images/uzbekistaan.svg';
const Register = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.BackButton}>
        <BackButton
          navigation={navigation}
          IconColor="#fff"
          backgroundColor={style.blue}
        />
      </View>
      <View style={{width: style.width, height: style.height}}>
        <View
          style={{alignItems: 'center', flex: 0.5, justifyContent: 'center'}}>
          <RegisterWithJuridic width="70%" height="70%" />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={[styles.enterText, {fontFamily: style.fontFamilyBold}]}>
            Avtorizatsiya
          </Text>
        </View>
        <View style={styles.main}>
          <View>
            <View style={[styles.TextInputLabelContainer, {marginBottom: 25}]}>
              <View style={styles.retryPassword}>
                <Text style={styles.phoneText}>STIRni kiriting</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  placeholderTextColor={style.placeHolderColor}
                  placeholder="AA1215125"
                  keyboardType="default"
                  style={styles.TextInput}
                />
              </View>
            </View>
            <View style={styles.TextInputLabelContainer}>
              <View
                style={{
                  position: 'absolute',
                  marginLeft: 15,
                  flex: 1,
                  zIndex: 1,
                  top: -10,
                  backgroundColor: '#fff',
                  paddingLeft: 5,
                  paddingRight: 5,
                }}>
                <Text style={styles.phoneText}>
                  Telefon raqamingizni kiriting
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '22%',
                  justifyContent: 'flex-end',
                }}>
                <Uzbekistan width="40%" height="40%" />
                <Text style={styles.phoneNumberText}>+998</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  placeholder="00 000 00 00"
                  placeholderTextColor={style.placeHolderColor}
                  maxLength={9}
                  keyboardType="number-pad"
                  style={[styles.TextInput, {paddingLeft: 5}]}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.enterButtonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('CheckSmsPassword', {type: 1});
            }}
            style={styles.enterButton}>
            <Text style={[styles.enterText, {color: '#fff'}]}>Davom etish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  enterButtonContainer: {
    marginTop: 20,
  },
  phoneNumberText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xx,
    color: style.textColor,
  },
  phoneText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
    color: style.textColor,
  },
  retryPassword: {
    position: 'absolute',
    marginLeft: 15,
    flex: 1,
    zIndex: 1,
    top: -10,
    backgroundColor: '#fff',
    paddingLeft: 5,
    paddingRight: 5,
  },
  BackButton: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 15,
    zIndex: 1,
    marginTop: Platform.OS === 'android' ? 40 : null,
  },
  TextInputLabelContainer: {
    borderColor: style.textColor,
    borderWidth: 0.5,
    borderRadius: 6,
    width: '90%',
    flexDirection: 'row',
  },
  enterButtonContainer: {
    marginTop: 20,
  },
  main: {
    alignItems: 'center',
    marginTop: 20,
  },
  enterButton: {
    width: '90%',
    backgroundColor: style.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    height: style.textInputHeight,
    alignSelf: 'center',
  },
  enterText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xs,
    color: style.textColor,
  },

  TextInput: {
    width: '100%',
    height: style.textInputHeight,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 15,
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
});
