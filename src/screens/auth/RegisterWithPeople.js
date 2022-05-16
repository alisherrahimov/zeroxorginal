import {
  Alert,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import {style} from '../../theme/style';
import RegisterWithPeopleIcon from '../../images/auth/illustrationregisterwithpeople.svg';
import Uzbekistan from '../../images/uzbekistaan.svg';
import Loading from '../components/Loading';
import {useDispatch, useSelector} from 'react-redux';
import {UserDataPostApi} from '../../store/api/auth';
import TextInputMask from 'react-native-text-input-mask';
const RegisterWithPeople = () => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const {loading, error, status} = useSelector(
    state => state.RegisterWithPeoplePhoneNumberReducer,
  );
  const route = useRoute();
  const {type} = route.params;
  const navigation = useNavigation();

  const [phone, setPhone] = useState('');
  const PostData = async () => {
    try {
      const response = await dispatch(UserDataPostApi(phone)).unwrap();
      if (response.success == true) {
        navigation.navigate(
          type == 1 ? 'CheckSmsPassword' : 'ChangePhoneNumber',
          {phone},
        );
      }
    } catch (error) {
      Alert.alert('ERROR', JSON.stringify(error));
    }
  };
  useEffect(() => {
    if (phone.length == 9) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [phone]);
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
      <View style={{width: style.width, height: style.height}}>
        <View
          style={{alignItems: 'center', flex: 0.5, justifyContent: 'center'}}>
          <RegisterWithPeopleIcon width="70%" height="70%" />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={[styles.enterText, {fontFamily: style.fontFamilyBold}]}>
            Avtorizatsiya
          </Text>
        </View>
        <View style={styles.main}>
          <View>
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
                <TextInputMask
                  placeholder="00 000 00 00"
                  placeholderTextColor={style.placeHolderColor}
                  value={phone}
                  mask={'[00] [000] [00] [00]'}
                  onChangeText={(formatted, extracted) => {
                    setPhone(extracted);
                  }}
                  keyboardType="number-pad"
                  style={styles.TextInput}
                />
              </View>
            </View>
          </View>
        </View>
        {error && (
          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 20,
              width: '90%',
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: style.fontSize.xx,
                fontFamily: style.fontFamilyMedium,
              }}>
              {JSON.stringify(status?.error?.data?.message)}
            </Text>
          </View>
        )}
        <View style={styles.enterButtonContainer}>
          <TouchableOpacity
            disabled={disabled}
            onPress={() => {
              PostData();
            }}
            style={[
              styles.enterButton,
              {
                backgroundColor: disabled
                  ? style.disabledButtonColor
                  : style.blue,
              },
            ]}>
            <Text style={[styles.enterText, {color: '#fff'}]}>Davom etish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterWithPeople;

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
    marginTop: Platform.OS === 'android' ? 40 : null,
    zIndex: 1,
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
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
});
