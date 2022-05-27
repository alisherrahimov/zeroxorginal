import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {Dimensions, PixelRatio, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const {width, height} = Dimensions.get('window');

const scale = width / 320;
const normalize = size => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
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
    xa: normalize(9),
    small: normalize(11),
    xx: normalize(13),
    xs: normalize(14),
    s: wp('5%'),
    m: wp('6%'),
    l: wp('7%'),
  },
  blue: '#3182CE',
  width: width,
  height: height,
  textInputHeight: hp('7%'),
  codeButtonSize: hp('9%'),
  StatusbarColor: '#4F92D1',
  MoneyColor: '#48BB78',
  backgroundColor: '#F7FAFC',
  buttonHeight: height / 13,
  disabledButtonColor: '#8692A6',
  placeHolderColor: '#A9ABAD',
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
