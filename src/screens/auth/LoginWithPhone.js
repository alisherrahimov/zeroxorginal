import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {style} from '../../theme/style';
import PhoneLoginImage from '../../images/phoneloginimage.svg';
import Uzbekistan from '../../images/uzbekistaan.svg';
import BackButton from '../components/BackButton';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../components/Loading';
import {LoginWithPhoneSendPasswordApi} from '../../store/api/auth';
import TextInputMask from 'react-native-text-input-mask';
const LoginWithPhone = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const {loading, status, error} = useSelector(
    state => state.LoginWithPhoneReducer,
  );
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const SendLogin = async () => {
    try {
      const response = await dispatch(
        LoginWithPhoneSendPasswordApi({phone: phone, password: password}),
      ).unwrap();
      if (response.success) {
        navigation.navigate('Test', {token: response.token});
      }
    } catch (error) {
      Alert.alert('ERROR', JSON.stringify(error));
    }
  };
  useEffect(() => {
    if (phone.length == 9 && password.length >= 8) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [phone, password]);
  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.BackButton}>
        <BackButton
          navigation={navigation}
          IconColor="#fff"
          backgroundColor={style.blue}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: style.width, height: style.height}}>
          <View
            style={{alignItems: 'center', flex: 0.6, justifyContent: 'center'}}>
            <PhoneLoginImage width="70%" height="70%" />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={[styles.enterText]}>Kirish</Text>
          </View>
          <View style={styles.main}>
            <View>
              <View style={styles.TextInputLabelContainer}>
                <View style={styles.inputTitle}>
                  <Text style={styles.phoneText}>
                    Telefon raqamingizni kiriting
                  </Text>
                </View>
                <View style={styles.inputFlag}>
                  <Uzbekistan width="40%" height="40%" />
                  <Text style={styles.phoneNumberText}>+998</Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInputMask
                    placeholder="00 000 00 00"
                    mask="{[00] [000] [00] [00]}"
                    placeholderTextColor={style.placeHolderColor}
                    value={phone}
                    onChangeText={(formated, extracted) => {
                      setPhone(extracted);
                    }}
                    keyboardType="number-pad"
                    style={styles.TextInput}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.main}>
            <View>
              <View style={styles.TextInputLabelContainer}>
                <View style={styles.inputTitle}>
                  <Text style={styles.phoneText}>Parolni kiriting</Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInput
                    placeholderTextColor={style.placeHolderColor}
                    placeholder="Parolni kiriting"
                    value={password}
                    onChangeText={text => {
                      setPassword(text);
                    }}
                    keyboardType="default"
                    style={[styles.TextInput, {paddingLeft: 15}]}
                  />
                </View>
              </View>
            </View>
          </View>
          {error && (
            <View>
              <Text style={{color: 'red'}}>{JSON.stringify(status)}</Text>
            </View>
          )}
          <View style={styles.enterButtonContainer}>
            <TouchableOpacity
              disabled={disabled}
              activeOpacity={0.8}
              onPress={() => {
                SendLogin();
              }}
              style={[
                styles.enterButton,
                {
                  backgroundColor: disabled
                    ? style.disabledButtonColor
                    : style.blue,
                },
              ]}>
              <Text
                style={[
                  styles.enterText,
                  {color: '#fff', fontFamily: style.fontFamilyMedium},
                ]}>
                Kirish
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate('RecoveryPassword');
                }}>
                <Text style={[styles.forgotPasswordText, {color: style.blue}]}>
                  Parolni unutdingizmi?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate('RegisterWithPeople', {type: 1});
                }}
                style={styles.registerButton}>
                <Text style={styles.forgotPasswordText}>Registratsiya</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginWithPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '22%',
    justifyContent: 'flex-end',
  },
  BackButton: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 15,
    zIndex: 1,
    marginTop: Platform.OS === 'android' ? 40 : null,
  },
  inputTitle: {
    position: 'absolute',
    marginLeft: 15,
    flex: 1,
    zIndex: 1,
    top: -10,
    backgroundColor: '#fff',
    paddingLeft: 5,
    paddingRight: 5,
  },
  forgotPasswordText: {
    color: '#fff',
    fontSize: style.fontSize.small,
    fontFamily: style.fontFamilyMedium,
  },
  TextInputLabelContainer: {
    borderColor: style.textColor,
    borderWidth: 0.5,
    borderRadius: 6,
    width: '90%',
    flexDirection: 'row',
    marginTop: 30,
  },
  registerButton: {
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: style.blue,
    borderRadius: 10,
    paddingBottom: 10,
    paddingTop: 10,
  },
  enterButtonContainer: {
    marginTop: 20,
  },
  main: {
    alignItems: 'center',
  },
  enterButton: {
    width: '90%',
    backgroundColor: style.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: style.buttonHeight,
    alignSelf: 'center',
  },
  enterText: {
    fontFamily: style.fontFamilyBold,
    fontSize: style.fontSize.xs,
    color: style.textColor,
  },
  phoneText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
    color: style.textColor,
  },
  phoneNumberText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xx,
    color: style.textColor,
  },
  TextInput: {
    width: '100%',
    height: style.textInputHeight,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 5,
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
});
