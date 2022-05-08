import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import {style} from '../../theme/style';
import SmsCheckPassword from '../../images/smscheck.svg';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../components/Loading';
import {SmsCheckCodeApi} from '../../store/api/auth';
const CheckSmsPassword = () => {
  const route = useRoute();
  const [disabled, setDisabled] = useState(true);
  const {phone} = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [code, setCode] = useState('');
  const {loading, error, status} = useSelector(
    state => state.RegisterWithPeopleCheckSmsCodeReducer,
  );

  const SendSmsCode = async () => {
    try {
      const response = await dispatch(
        SmsCheckCodeApi({phone: phone, code: code}),
      ).unwrap();
      if ((response.success = true)) {
        navigation.navigate('CreatePassword', {phone: phone, code: code});
      }
    } catch (error) {
      console.error(error, 'Errr');
    }
  };
  useEffect(() => {
    if (code.length == 4) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [code]);
  if (loading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={styles.container}>
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
            <SmsCheckPassword width="70%" height="70%" />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[styles.enterText, {fontFamily: style.fontFamilyBold}]}>
              Avtorizatsiya
            </Text>
          </View>
          <View style={styles.main}>
            <View>
              <View
                style={[styles.TextInputLabelContainer, {marginBottom: 25}]}>
                <View style={styles.retryPassword}>
                  <Text style={styles.phoneText}>Kod</Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInput
                    placeholder="0000"
                    maxLength={4}
                    keyboardType="decimal-pad"
                    onChangeText={text => {
                      setCode(text);
                    }}
                    style={styles.TextInput}
                  />
                </View>
              </View>
            </View>
          </View>
          {error && (
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  color: 'red',
                  fontFamily: style.fontFamilyMedium,
                  fontSize: style.fontSize.xx,
                }}>
                {JSON.stringify(status)}
              </Text>
            </View>
          )}
          <View style={styles.enterButtonContainer}>
            <TouchableOpacity
              disabled={disabled}
              activeOpacity={0.8}
              onPress={() => {
                SendSmsCode();
              }}
              style={[
                styles.enterButton,
                {
                  backgroundColor: disabled
                    ? style.disabledButtonColor
                    : style.blue,
                },
              ]}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Davom etish
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footerContainer}>
            <View style={styles.footerInside}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.retryPasswordSend}>
                <Text style={styles.retryPasswordText}>
                  Kodni qayta {'\n'} yuborish
                </Text>
              </TouchableOpacity>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>02 : 00</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CheckSmsPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  time: {
    fontSize: style.fontSize.small,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
  timeContainer: {
    borderWidth: 1,
    borderColor: style.blue,
    borderRadius: 5,
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  retryPasswordText: {
    fontSize: style.fontSize.small,
    color: '#fff',
    fontFamily: style.fontFamilyMedium,
    textAlign: 'center',
  },
  retryPasswordSend: {
    borderRadius: 6,
    backgroundColor: style.blue,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    padding: 10,
    marginRight: 20,
  },
  footerInside: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  enterButtonContainer: {
    marginTop: 5,
  },
  footerContainer: {
    flex: 0.2,
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  phoneNumberText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
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
  },
  TextInputLabelContainer: {
    borderColor: style.textColor,
    borderWidth: 0.5,
    borderRadius: 6,
    width: '90%',
    flexDirection: 'row',
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
