import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {style} from '../../theme/style';
import PropTypes from 'prop-types';

const ListCard = ({title, uzs = [], usd = []}) => {
  const [color, setColor] = React.useState(false);
  const onChangeColor = bool => {
    setColor(bool);
  };

  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.containerrr}>
      <View>
        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            onPress={() => {
              onChangeColor(true);
            }}
            style={[
              styles.valyut,
              {backgroundColor: color ? style.blue : '#fff'},
            ]}>
            <Text
              style={[
                styles.valyutText,
                {color: color ? '#fff' : style.textColor},
              ]}>
              UZS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onChangeColor(false);
            }}
            style={[
              styles.valyut,
              {backgroundColor: color ? '#fff' : style.blue},
            ]}>
            <Text
              style={[
                styles.valyutText,
                {color: color ? style.textColor : '#fff'},
              ]}>
              USD
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: style.backgroundColor,
            height: 40,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <Text style={styles.text}>QOLGAN VAQT</Text>
            <Text style={styles.text}>SUMMA</Text>
          </View>
        </View>
        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          {color ? (
            uzs.length == 0 ? (
              <Text
                style={[
                  styles.text,
                  {fontSize: style.fontSize.small - 2, alignSelf: 'center'},
                ]}>
                Mavjud emas
              </Text>
            ) : (
              uzs.map((item, index) => {
                return (
                  <View style={styles.listContainer}>
                    <Text style={styles.dayText}>{index + 1} kun</Text>
                    <Text style={styles.money}>{item?.amount}</Text>
                  </View>
                );
              })
            )
          ) : usd.length == 0 ? (
            <Text
              style={[
                styles.text,
                {fontSize: style.fontSize.small - 2, alignSelf: 'center'},
              ]}>
              Mavjud emas
            </Text>
          ) : (
            usd.map((item, index) => {
              return (
                <View style={styles.listContainer}>
                  <Text style={styles.dayText}>{index + 1} kun</Text>
                  <Text style={styles.money}>{item?.amount}</Text>
                </View>
              );
            })
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};
ListCard.propTypes = {
  title: PropTypes.string,
  uzs: PropTypes.array,
  usd: PropTypes.array,
};
export default ListCard;

const styles = StyleSheet.create({
  containerrr: {
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
  },
  valyutText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small - 2,
    color: '#fff',
  },
  valyut: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    flex: 1,
    height: 25,
  },
  text: {
    fontSize: style.fontSize.small - 3,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
  title: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
  dayText: {
    color: '#718096',
    fontSize: style.fontSize.xa + 2,
    fontFamily: style.fontFamilyMedium,
  },
  money: {
    fontSize: style.fontSize.xa + 2,
    fontFamily: style.fontFamilyMedium,
    color: 'red',
  },
  listContainer: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
