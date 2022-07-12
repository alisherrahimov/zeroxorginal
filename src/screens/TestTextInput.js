import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextInputMask from 'react-native-text-input-mask';
import {style} from '../theme/style';

const TestTextInput = () => {
  const [mask, setMask] = React.useState('');
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
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
          <Text style={styles.phoneText}>Tug'ulgan vaqtingiz</Text>
        </View>

        <View style={{flex: 1}}>
          <TextInputMask
            value={mask}
            keyboardType="numeric"
            placeholder="kun.oy.yil"
            mask="[00]{.}[00]{.}[0000]"
            onChangeText={(formated, text) => {
              let day = text.slice(0, 2);
              let month = text.slice(3, 5);
              if (Number(day) > 31) {
                day = '31';
                setMask(`${day}.${month}.${text.slice(6)}`);
              }
              if (Number(month) > 12) {
                month = '12';
                setMask(`${day}.${month}.${text.slice(6)}`);
              }
              setMask(formated);
            }}
            style={styles.TextInput}
          />
        </View>
      </View>
    </View>
  );
};

export default TestTextInput;

const styles = StyleSheet.create({
  TextInput: {
    width: '60%',
    height: style.textInputHeight,
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
  phoneNumberText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xx,
    color: style.textColor,
  },
  TextInputLabelContainer: {
    borderColor: style.textColor,
    borderWidth: 0.5,
    borderRadius: 6,
    width: '90%',
    flexDirection: 'row',
  },
});
