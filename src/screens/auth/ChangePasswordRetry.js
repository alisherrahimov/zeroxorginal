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
import ChangePasswordIcon from '../../images/auth/illustrationchangepassword.svg';
const ChangePasswordRetry = () => {
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
          <ChangePasswordIcon width="70%" height="70%" />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={[styles.enterText, {fontFamily: style.fontFamilyBold}]}>
            Parolni o'zgartirish
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
                <Text style={styles.phoneText}>Yangi parolni kiriting</Text>
              </View>

              <View style={{flex: 1}}>
                <TextInput
                  secureTextEntry={true}
                  placeholder="*******"
                  placeholderTextColor={style.placeHolderColor}
                  keyboardType="default"
                  style={styles.TextInput}
                />
              </View>
            </View>
            <View style={[styles.TextInputLabelContainer, {marginTop: 20}]}>
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
                <Text style={styles.phoneText}>Parolni takrorlang</Text>
              </View>

              <View style={{flex: 1}}>
                <TextInput
                  secureTextEntry={true}
                  placeholder="*******"
                  placeholderTextColor={style.placeHolderColor}
                  keyboardType="default"
                  style={styles.TextInput}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.enterButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UserScreen');
            }}
            style={styles.enterButton}>
            <Text style={[styles.enterText, {color: '#fff'}]}>Davom etish</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordRetry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  enterButtonContainer: {
    marginTop: 20,
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
