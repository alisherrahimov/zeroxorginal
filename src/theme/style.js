import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');
const style = {
  backgroundColorLight: '#fff',
  backgroundColorDark: '#000',
  textColorLight: '#fff',
  textColorDark: '#000',
  textColor: '#494949',
  fontFamilyThin: 'Montserrat-Thin',
  fontFamilyBold: 'Montserrat-Bold',
  fontFamilyRegular: 'Montserrat-Regular',
  fontFamilyMedium: 'Montserrat-Medium',
  fontFamilyLight: 'Montserrat-Light',
  fontSize: {
    xa: wp('2.5%'),
    xx: wp('3.5%'),
    xs: wp('4%'),
    s: wp('5%'),
    m: wp('6%'),
    l: wp('7%'),
  },
  blue: '#3182CE',
  width: width,
  height: height,
  textInputHeight: hp('7%'),
  codeButtonSize: hp('8%'),
  StatusbarColor: '#4F92D1',
  MoneyColor: '#48BB78',
  backgroundColor: '#F7FAFC',
  buttonHeight: height / 13,
};
const darkSchema = {
  dark: true,
  ...DarkTheme,
  backgroundColor: style.backgroundColorDark,
  textColor: style.textColorDark,
};
const lightSchema = {
  dark: false,
  ...DefaultTheme,
  backgroundColor: style.backgroundColorLight,
  textColor: style.textColorLight,
};
export {style, darkSchema, lightSchema};
