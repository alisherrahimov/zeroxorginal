import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {style} from '../../theme/style';
import ResetPassword from '../../images/resetpassport.svg';
import BackButton from '../components/BackButton';
const RecoveryPassword = () => {
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: style.width, height: style.height}}>
          <View
            style={{alignItems: 'center', flex: 0.5, justifyContent: 'center'}}>
            <ResetPassword width="70%" height="70%" />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[styles.enterText, {fontFamily: style.fontFamilyBold}]}>
              Parolni tiklash
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[
                styles.enterText,
                {
                  fontSize: style.fontSize.xx,
                  fontFamily: style.fontFamilyMedium,
                },
              ]}>
              Parolni tiklash uchun maxfiy so’zni kiriting
            </Text>
          </View>
          <View style={styles.main}>
            <View>
              <Text
                style={[
                  styles.enterText,
                  {
                    fontSize: style.fontSize.small,
                    marginBottom: 20,
                    marginTop: 40,
                    fontFamily: style.fontFamilyMedium,
                  },
                ]}>
                Sevimli jamoam
              </Text>

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
                  <Text style={styles.phoneText}>Maxfiy so’zni kiriting</Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInput keyboardType="default" style={styles.TextInput} />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.enterButtonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('NewPasswordEnter');
              }}
              style={styles.enterButton}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Davom etish
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecoveryPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  registerButton: {
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: style.blue,
    borderRadius: 6,
    paddingBottom: 10,
    paddingTop: 10,
  },
  BackButton: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 15,
    zIndex: 1,
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
    height: style.textInputHeight,
    alignSelf: 'center',
  },
  enterText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xs,
    color: style.textColor,
  },
  phoneText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
    color: style.textColor,
  },
  phoneNumberText: {
    marginLeft: 5,
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
    color: style.textColor,
  },
  TextInput: {
    width: '100%',
    height: style.textInputHeight,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 15,
    fontSize: style.fontSize.small,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
});
