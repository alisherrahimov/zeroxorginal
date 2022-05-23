import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from '../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import SetCode from '../../images/setCode.svg';
import {useNavigation} from '@react-navigation/native';
import TouchID from 'react-native-touch-id';
import Toast from 'react-native-toast-message';
import {toastConfig} from '../components/ToastConfig';
const SetLocalPassword = () => {
  const [supportScan, setSupportScan] = useState(false);
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onFingerScan = () => {
    TouchID.isSupported({unifiedErrors: false})
      .then(biometryType => {
        setSupportScan(true);
        TouchID.authenticate(
          'Shaxsingizni tasqidlash uchun barmoq izidan foydalaning',
          {
            promptMessage: 'Scan your finger',
            unifiedErrors: false,
            fallbackLabel: '',
            cancelText: 'Bekor qilish',
            imageColor: style.blue,
            imageErrorColor: 'red',
            title: 'Touch ID',
          },
        )
          .then(() => {
            navigation.reset({
              routes: [{name: 'BottomTabNavigator'}],
              index: 0,
            });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(error => {
        setSupportScan(false);
      });
  };
  const onSetCode = val => {
    if (password.length <= 3) {
      setPassword(password + val);
    }
  };
  const onBackSpace = () => {
    setPassword(password.slice(0, -1));
  };
  useEffect(() => {
    if (password.length == 4) {
      if (password == '1234') {
        navigation.navigate('BottomTabNavigator');
      } else {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Password is wrong',
          visibilityTime: 5000,
          autoHide: true,
        });
      }
    }
    if (password.length == 0) {
      onFingerScan();
    }
  }, [password]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center', marginTop: 40}}>
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              routes: [{name: 'BottomTabNavigator'}],
              index: 0,
            });
          }}
          activeOpacity={0.8}
          style={styles.notSetPasswordButton}>
          <Text style={styles.notSetText}>Pin kod o’rnatmasdan kirish</Text>
          <Icon
            style={{marginLeft: 5}}
            name="chevron-right"
            color={'#fff'}
            size={25}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.35,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <SetCode width="80%" height="80%" />
      </View>
      <View style={{flex: 0.7}}>
        <View style={styles.setCodeTextContainer}>
          <Text style={styles.text}>PIN KOD o’rnating</Text>
        </View>
        <View style={styles.codeContainer}>
          <View style={styles.fourItem}>
            {Array.from({length: 4}, (v, i) => {
              return (
                <View
                  key={i}
                  style={[
                    styles.codeItem,
                    {
                      backgroundColor:
                        i < password.length ? style.blue : '#EEEEEE',
                    },
                  ]}
                />
              );
            })}
          </View>
          <View
            style={{
              flex: 1,
              width: 300,
              alignSelf: 'center',
              justifyContent: 'center',
            }}>
            <View style={styles.codeNumberContainer}>
              {Array.from({length: 12}, (v, i) => {
                if (i === 9) {
                  return (
                    <View key={i} style={[styles.codeNumberContainer]}>
                      {supportScan ? (
                        <Pressable
                          android_ripple={{
                            color: style.blue,
                            radius: 50,
                            borderless: true,
                          }}
                          onPress={() => {
                            onFingerScan();
                          }}
                          style={styles.codeButton}>
                          <Image
                            source={require('../../images/auth/fingerprint.png')}
                            style={{width: 30, height: 30}}
                            resizeMode="cover"
                          />
                        </Pressable>
                      ) : (
                        <View
                          style={[styles.codeButton, {backgroundColor: '#fff'}]}
                        />
                      )}
                    </View>
                  );
                } else {
                  if (i === 10) {
                    return (
                      <View key={i} style={styles.codeNumberContainer}>
                        <Pressable
                          onPress={() => {
                            onSetCode(0);
                          }}
                          android_ripple={{
                            color: style.blue,
                            radius: 50,
                            borderless: true,
                          }}
                          style={styles.codeButton}>
                          <Text style={styles.textCode}>0</Text>
                        </Pressable>
                      </View>
                    );
                  }
                  if (i === 11) {
                    return (
                      <View key={i} style={styles.codeNumberContainer}>
                        <Pressable
                          onPress={() => {
                            onBackSpace();
                          }}
                          android_ripple={{
                            color: style.blue,
                            radius: 50,
                            borderless: true,
                          }}
                          style={styles.codeButton}>
                          <Icon
                            name="backspace"
                            size={25}
                            color={style.textColor}
                          />
                        </Pressable>
                      </View>
                    );
                  }
                  return (
                    <View key={i} style={styles.codeNumberContainer}>
                      <Pressable
                        onPress={() => {
                          onSetCode(i + 1);
                        }}
                        android_ripple={{
                          color: style.blue,
                          radius: 50,
                          borderless: true,
                        }}
                        style={styles.codeButton}>
                        <Text style={styles.textCode}>{i + 1}</Text>
                      </Pressable>
                    </View>
                  );
                }
              })}
            </View>
          </View>
        </View>
      </View>
      <Toast config={toastConfig} />
    </SafeAreaView>
  );
};

export default SetLocalPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.blue,
  },
  codeNumberContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeButton: {
    width: style.codeButtonSize,
    height: style.codeButtonSize,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEEEEE',
    margin: 10,
  },
  fourItem: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },
  codeItem: {
    width: 15,
    height: 15,
    backgroundColor: style.blue,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  codeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  setCodeTextContainer: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  textCode: {
    fontSize: style.fontSize.m,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
  notSetPasswordButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: 10,
  },
  text: {
    fontSize: style.fontSize.xs,
    color: '#fff',
    fontFamily: style.fontFamilyBold,
  },
  notSetText: {
    color: '#fff',
    fontSize: style.fontSize.small,
    fontFamily: style.fontFamilyMedium,
  },
});
