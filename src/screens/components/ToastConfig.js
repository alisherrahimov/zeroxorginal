import React from 'react';
import {Text, View} from 'react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {style} from '../../theme/style';
export const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: style.blue}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontWeight: '200',
        fontSize: style.fontSize.xs,
        fontFamily: style.fontFamilyMedium,
        color: style.textColor,
      }}
    />
  ),

  error: props => (
    <ErrorToast
      {...props}
      style={{borderLeftColor: 'red', borderLeftWidth: 5}}
      text1Style={{
        fontWeight: '200',
        fontSize: style.fontSize.xs,
        fontFamily: style.fontFamilyMedium,
        color: style.textColor,
      }}
      text2Style={{
        fontWeight: '200',
        fontSize: style.fontSize.xs,
        fontFamily: style.fontFamilyMedium,
        color: style.textColor,
      }}
    />
  ),

  tomatoToast: ({text1, props}) => (
    <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};
