import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo} from 'react';
import {PurseIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import {useNavigation} from '@react-navigation/native';

const Card = ({
  title,
  type,
  Icon,
  color,
  disabled,
  width,
  height,
  url,
  person,
  usd,
  uzs,
}) => {
  const navigation = useNavigation();
  console.log(uzs);
  return (
    <TouchableOpacity
      disabled={disabled ? true : false}
      onPress={() => {
        navigation.navigate('SearchDebitor', {
          title: title,
          type: type,
          color: color,
          url,
          person,
        });
      }}
      activeOpacity={0.9}
      style={[
        styles.container,
        {backgroundColor: type == 1 ? '#f0f3f7' : '#fff', width: width},
      ]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={[
            styles.title,
            {
              color: color,
              maxWidth: type == 1 ? '80%' : '100%',
            },
          ]}>
          {title}
        </Text>
        <Icon width={30} height={30} />
      </View>
      <View style={{marginTop: 20}}>
        <Text style={styles.sum}>{uzs} so'm</Text>
        <Text style={styles.sum}>{usd} $</Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  container: {
    flex: 1,

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
    fontSize: style.fontSize.small,
    fontFamily: style.fontFamilyMedium,
    color: style.MoneyColor,
  },
  title: {
    fontSize: style.fontSize.small,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
});
