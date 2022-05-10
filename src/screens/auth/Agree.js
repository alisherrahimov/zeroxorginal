import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import {style} from '../../theme/style';
import AgreeSVG from '../../images/agree.svg';
import CheckBox from '@react-native-community/checkbox';
const Agree = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.BackButton}>
        <BackButton
          navigation={navigation}
          IconColor="#fff"
          backgroundColor={style.blue}
        />
      </View>
      <View
        style={{
          width: style.width,
          height: style.height,
        }}>
        <View
          style={{alignItems: 'center', flex: 0.5, justifyContent: 'center'}}>
          <AgreeSVG width="70%" height="70%" />
        </View>
        <View style={{flex: 0.5}}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              width: '80%',
              alignSelf: 'center',
            }}>
            <View>
              <CheckBox
                value={checked}
                tintColors={{true: style.blue, false: style.blue}}
                tintColor="red"
                onValueChange={value => {
                  setChecked(value);
                }}
                onCheckColor="red"
              />
            </View>
            <View style={{marginLeft: 5}}>
              <Text style={styles.notificationText}>
                Universal shartnoma bilan tanishib chiqib, shartnomaning barcha
                shartlariga rozi{'\n'}ekanligimni tasdiqlayman
              </Text>
            </View>
          </View>

          <View style={styles.enterButtonContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('BottomTabNavigator');
              }}
              activeOpacity={0.8}
              style={styles.enterButton}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Davom etish
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Agree;

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
    fontSize: style.fontSize.xs,
    color: style.textColor,
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
    fontSize: style.fontSize.s,
    color: style.textColor,
  },
  notificationText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xx,
    color: style.textColor,
    textAlign: 'left',
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
