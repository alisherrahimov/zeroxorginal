import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import {style} from '../../../theme/style';
import {
  Logo,
  QrCodeIcon,
  AboutIcon,
  DeviceIcon,
  SecurityIcon,
  ShareIcon,
  ServiceSupport,
} from '../../../helper/drawerIcon';
import {useNavigation} from '@react-navigation/native';
const DrawerScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            flex: 0.4,
          }}>
          <Logo width="50%" height="50%" />
          <Text style={styles.ishonch}>Ishonch kafolati</Text>
          <View
            style={{
              alignSelf: 'center',
              height: 3,
              width: '80%',
              maxWidth: '80%',
              backgroundColor: '#E0E1E228',
              borderRadius: 15,
              marginTop: 10,
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('QrCode');
              }}
              style={styles.button}>
              <QrCodeIcon width={25} height={25} />
              <Text style={styles.buttonText}>QR kod</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UseTerm');
              }}
              style={styles.button}>
              <SecurityIcon width={25} height={25} />
              <Text style={styles.buttonText}>Foydalanish yoriqnomasi</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.button}>
              <ShareIcon width={25} height={25} />
              <Text style={styles.buttonText}>Do’stlar bilan ulashing</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Support');
              }}
              style={styles.button}>
              <ServiceSupport width={25} height={25} />
              <Text style={styles.buttonText}>Qo’llab quvvatlash xizmati</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ShareDevices');
              }}
              style={styles.button}>
              <DeviceIcon width={25} height={25} />
              <Text style={styles.buttonText}>Ulangan qurilmalar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AboutMe');
              }}
              style={styles.button}>
              <AboutIcon width={25} height={25} />
              <Text style={styles.buttonText}>Biz haqimizda</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DrawerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  buttonText: {
    fontSize: style.fontSize.x,
    fontFamily: style.fontFamilyBold,
    color: '#A0AEC0',
    marginLeft: 15,
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 40,
  },
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  ishonch: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xx,
    color: style.textColor,
    marginTop: 10,
  },
  buttonContainer: {
    fleX: 1,
    marginTop: 20,
  },
});
