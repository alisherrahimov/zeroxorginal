import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {style} from '../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {setValueNull} from '../../store/reducers/RegisterWithPeoplePhoneNumberReducer';

const BackButton = ({navigation, backgroundColor, IconColor}) => {
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        dispatch(setValueNull());
        navigation.goBack();
      }}
      style={[styles.TouchableOpacity, {backgroundColor: backgroundColor}]}>
      <Icon name="chevron-left" size={25} color={IconColor} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  TouchableOpacity: {
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: style.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
