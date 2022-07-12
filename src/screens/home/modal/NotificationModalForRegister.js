import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Modal, Portal, Provider} from 'react-native-paper';
import {normalize, style} from '../../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NotificationModalForRegister = ({hide, onHide}) => {
  return (
    <Modal
      visible={hide}
      onDismiss={() => {
        onHide(!hide);
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: normalize(10),
          alignSelf: 'center',
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: style.fontFamilyBold,
              color: '#000',
              fontSize: style.fontSize.s,
            }}>
            Bildirishnoma
          </Text>
          <TouchableOpacity
            style={{padding: 2}}
            onPress={() => {
              onHide(!hide);
            }}>
            <Icon name="times" size={normalize(25)} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 8, maxWidth: '90%'}}>
          <Text
            style={{
              fontFamily: style.fontFamilyMedium,
              color: '#000',
              fontSize: style.fontSize.xs,
            }}>
            Hurmatli foydalanuvchi, siz identifikatsiyadan o’tmaganligingiz
            sababli dasturning asosiy funksiyalaridan foydalana olmaysiz.
            Iltimos, dasturdan to’liq foydalanish uchun quyidagi havola orqali
            identifikatsiyadan o’ting.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontFamily: style.fontFamilyMedium,
              color: '#000',
              fontSize: style.fontSize.xs,
            }}>
            Bugun soat 22:30
          </Text>
          <TouchableOpacity activeOpacity={0.8} style={styles.enterButton}>
            <Text
              style={{
                fontFamily: style.fontFamilyMedium,
                color: '#fff',
                fontSize: style.fontSize.xx,
                textAlign: 'center',
              }}>
              Identifikatsiyadan{'\n'}o’tish
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default NotificationModalForRegister;

const styles = StyleSheet.create({
  enterButton: {
    backgroundColor: style.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    alignSelf: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 3,
    paddingRight: 3,
  },
});
