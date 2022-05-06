import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {style} from '../../theme/style';
import PhoneLoginImage from '../../images/phoneloginimage.svg';
import Uzbekistan from '../../images/uzbekistaan.svg';
import BackButton from '../components/BackButton';
import axios from 'axios';
import {URL} from '../constants';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../components/Loading';
import {LoginWithPhoneSendPasswordApi} from '../../store/reducers/LoginWithPhoneReducer';
const LoginWithPhone = () => {
  const dispatch = useDispatch();
  const {loading, status, error} = useSelector(
    state => state.LoginWithPhoneReducer,
  );
  const [phone, setPhone] = useState({phone: '', password: ''});
  const navigation = useNavigation();
  const SendLogin = async () => {
    try {
      const response = await dispatch(
        LoginWithPhoneSendPasswordApi(phone),
      ).unwrap();
      if (response.success == true) {
        navigation.navigate('Test', {status});
      }
    } catch (error) {
      Alert.alert('ERROR', JSON.stringify(error));
    }
  };
  if (loading) {
    return <Loading />;
  }
  console.log(phone);
  console.log(status, 'Status');

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
            style={{alignItems: 'center', flex: 0.5, justifyContent: 'center'}}>
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
                  <TextInput
                    value={phone.phone}
                    onChangeText={text => {
                      setPhone({...phone, phone: text});
                    }}
                    maxLength={9}
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
                    value={phone.password}
                    onChangeText={text => {
                      setPhone({...phone, password: text});
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
              activeOpacity={0.8}
              onPress={() => {
                SendLogin();
              }}
              style={styles.enterButton}>
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
    fontSize: style.fontSize.xx,
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
    fontSize: style.fontSize.s,
    color: style.textColor,
  },
  phoneText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xx,
    color: style.textColor,
  },
  phoneNumberText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xs,
    color: style.textColor,
  },
  TextInput: {
    width: '100%',
    height: style.textInputHeight,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 5,
    fontSize: style.fontSize.xs,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
});
