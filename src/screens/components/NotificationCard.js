import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {style} from '../../theme/style';
import CloseIcon from '../../images/components/CloseIcon.svg';
const NotificationCard = () => {
  return (
    <View style={styles.container}>
      <View style={{marginVertical: 15, marginHorizontal: 15}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.notificationTitle}>Bildirishnomalar</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <CloseIcon width={20} height={20} />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 5}}>
          <Text
            style={[styles.notificationTitle, {fontSize: style.fontSize.xx}]}>
            Qarz muddati uzaytirilganligi{'\n'}to`g`risida bildirishnoma
          </Text>
        </View>
        <View style={{marginTop: 15}}>
          <Text style={styles.notification}>
            01.01.2021 yildagi 01/01/2021/000001-sonli shartnoma bilan
            rasmiylashtirilgan qarz shartnomasi muddati 01.01.2022 yilgacha
            uzaytirildi.
          </Text>
        </View>
        <View style={{marginTop: 15}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.notification}>Bugun soat 22:30</Text>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
              <Text style={[styles.notification, {color: '#fff'}]}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '95%',
    alignSelf: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    borderRadius: 10,
    elevation: 7,
  },
  button: {
    backgroundColor: style.blue,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: style.width / 4,
  },
  notification: {
    fontSize: style.fontSize.x,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
    lineHeight: 25,
  },
  notificationTitle: {
    fontSize: style.fontSize.x,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
});
