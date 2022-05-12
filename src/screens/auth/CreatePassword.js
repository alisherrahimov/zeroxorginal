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
import {useNavigation, useRoute} from '@react-navigation/native';
import {style} from '../../theme/style';
import NewPasspord from '../../images/newpasspord.svg';
import BackButton from '../components/BackButton';
import Uzbekistan from '../../images/uzbekistaan.svg';
import {useDispatch, useSelector} from 'react-redux';
import Loading from '../components/Loading';
import {CreatePasswordSendApi} from '../../store/api/auth';
import TextInputMask from 'react-native-text-input-mask';
const CreatePassword = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();
  const [disabled, setDisabled] = useState(true);
  const {phone, code} = route.params;
  const {loading, status, error} = useSelector(
    state => state.CreatePasswordReducer,
  );
  const [password, setPassword] = useState({password: '', confirmPassword: ''});

  const SendCreatePassword = async () => {
    try {
      const response = await dispatch(
        CreatePasswordSendApi({phone, code, password}),
      ).unwrap();
      if (response.success == true) {
        navigation.navigate('LoginWithPhone');
      }
    } catch (error) {
      Alert.alert('ERROR', JSON.stringify(error));
    }
  };
  useEffect(() => {
    if (
      password.password == password.confirmPassword &&
      password.password.length >= 8 &&
      password.confirmPassword.length >= 8
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password]);
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
            style={{alignItems: 'center', flex: 0.7, justifyContent: 'center'}}>
            <NewPasspord width="70%" height="70%" />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[
                styles.enterText,
                {marginBottom: 30, fontFamily: style.fontFamilyBold},
              ]}>
              Parol yaratish
            </Text>
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
                    value={phone}
                    editable={false}
                    mask={'[00] [000] [00] [00]'}
                    placeholder="00 000 00 00"
                    keyboardType="number-pad"
                    style={styles.TextInput}
                  />
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: 20,
            }}>
            <Text
              style={[
                styles.enterText,
                {
                  fontSize: style.fontSize.small,
                  textAlign: 'left',
                  maxWidth: '90%',
                  fontFamily: style.fontFamilyMedium,
                },
              ]}>
              Parol harf, raqam va boshqa belgilardan tashkil topgan kamida 8 ta
              belgidan iborat bo’lishi lozim.{' '}
            </Text>
          </View>
          <View style={styles.main}>
            <View>
              <View
                style={[styles.TextInputLabelContainer, {marginBottom: 25}]}>
                <View style={styles.retryPassword}>
                  <Text style={styles.phoneText}>Parol yarating</Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInput
                    placeholder="Parolni yarating"
                    value={password.password}
                    onChangeText={text => {
                      setPassword({...password, password: text});
                    }}
                    keyboardType="default"
                    style={styles.TextInput}
                  />
                </View>
              </View>
              <View style={styles.TextInputLabelContainer}>
                <View style={styles.retryPassword}>
                  <Text style={styles.phoneText}>Parolni takrorlang</Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInput
                    placeholder="Parolni takrorlang"
                    value={password.confirmPassword}
                    onChangeText={text => {
                      setPassword({...password, confirmPassword: text});
                    }}
                    keyboardType="default"
                    style={styles.TextInput}
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
              onPress={() => {
                SendCreatePassword();
              }}
              activeOpacity={0.8}
              style={[
                styles.enterButton,
                {
                  backgroundColor: disabled
                    ? style.disabledButtonColor
                    : style.blue,
                },
              ]}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Tasdiqlash
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreatePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  phoneNumberText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xx,
    color: style.textColor,
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
  inputFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '22%',
    justifyContent: 'flex-end',
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
    borderRadius: 10,
    height: style.buttonHeight,
    alignSelf: 'center',
  },
  enterText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xs,
    color: style.textColor,
  },
  BackButton: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 15,
    zIndex: 1,
    marginTop: Platform.OS === 'android' ? 40 : null,
  },
  TextInput: {
    width: '100%',
    height: style.textInputHeight,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 10,
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
});
