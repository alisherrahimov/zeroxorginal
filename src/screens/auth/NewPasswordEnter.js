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
import NewPasspord from '../../images/newpasspord.svg';
import BackButton from '../components/BackButton';
const NewPasswordEnter = () => {
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
            <NewPasspord width="70%" height="70%" />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text
              style={[
                styles.enterText,
                {marginBottom: 30, fontFamily: style.fontFamilyBold},
              ]}>
              Yangi parol kiriting
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
            }}>
            <Text
              style={[
                styles.enterText,
                {
                  fontSize: style.fontSize.xx,
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
                  <TextInput keyboardType="default" style={styles.TextInput} />
                </View>
              </View>
              <View style={styles.TextInputLabelContainer}>
                <View style={styles.retryPassword}>
                  <Text style={styles.phoneText}>Parolni takrorlang</Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInput keyboardType="default" style={styles.TextInput} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.enterButtonContainer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.enterButton}>
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

export default NewPasswordEnter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  phoneText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xx,
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
    fontSize: style.fontSize.s,
    color: style.textColor,
  },
  BackButton: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 15,
    zIndex: 1,
  },
  TextInput: {
    width: '100%',
    height: style.textInputHeight,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 15,
    fontSize: style.fontSize.xs,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
});
