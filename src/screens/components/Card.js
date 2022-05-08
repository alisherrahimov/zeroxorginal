import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {PurseIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import {useNavigation} from '@react-navigation/native';

const Card = ({title, type, Icon}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('SearchDebitor', {title: title, type: type});
      }}
      activeOpacity={0.9}
      style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>{title}</Text>
        <Icon width={30} height={30} />
      </View>
      <View style={{marginTop: 20}}>
        <Text style={styles.sum}>$53,897</Text>
        <Text style={styles.sum}>500000 so’m</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: style.width / 2.3,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 10,
  },
  sum: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.MoneyColor,
  },
  title: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
});
