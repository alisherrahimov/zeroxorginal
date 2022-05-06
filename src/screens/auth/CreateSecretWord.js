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
import SecretWord from '../../images/sercretword.svg';
import BackButton from '../components/BackButton';
const CreateSecretWord = () => {
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
            <SecretWord width="70%" height="70%" />
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.enterText}>Maxfiy so’z yaratish</Text>
          </View>

          <View style={styles.main}>
            <View style={{marginTop: 20}}>
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
                    Maxfiy so’z uchun savol yarating
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInput keyboardType="default" style={styles.TextInput} />
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
                  <Text style={styles.phoneText}>Maxfiy so’zni yarating</Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInput keyboardType="default" style={styles.TextInput} />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.enterButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('NewPasspordEnter');
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

export default CreateSecretWord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 20,
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
    borderRadius: 6,
    height: style.textInputHeight,
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
    marginLeft: 5,
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
    fontSize: style.fontSize.xs,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
});
