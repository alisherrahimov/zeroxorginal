import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {style} from '../../theme/style';

const ListCard = ({title}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <View>
        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <Text style={styles.title}>{title}</Text>
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
            <Text style={styles.text}>UMUMIY SUMMA</Text>
          </View>
        </View>
        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <View style={styles.listContainer}>
            <Text style={styles.dayText}>1 kun</Text>
            <Text style={styles.money}>1000000 so’m / $50</Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.dayText}>2 kun</Text>
            <Text style={styles.money}>1000000 so’m / $50</Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.dayText}>3 kun</Text>
            <Text style={styles.money}>1000000 so’m / $50</Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.dayText}>4 kun</Text>
            <Text style={styles.money}>1000000 so’m / $200</Text>
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.dayText}>5 kun</Text>
            <Text style={styles.money}>1000000 so’m / $50</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
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
  text: {
    fontSize: style.fontSize.xa,
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
