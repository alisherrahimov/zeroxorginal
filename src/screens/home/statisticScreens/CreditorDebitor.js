import {
  Platform,
  //   ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackGroundIcon} from '../../../helper/homeIcon';
import {style} from '../../../theme/style';
import BackButton from '../../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CreditorDebitor = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{position: 'absolute', height: style.height / 3, width: '100%'}}>
        <BackGroundIcon width="100%" height="100%" />
      </View>
      <View style={styles.main}>
        <View style={{marginTop: Platform.OS === 'android' ? 40 : null}}>
          <BackButton
            navigation={navigation}
            backgroundColor={'#fff'}
            IconColor={style.blue}
          />
        </View>
        <View style={styles.aboutUsContainer}>
          <View style={styles.header}>
            <View style={[styles.item, {left: 60}]}>
              <Text style={styles.info}>Qarzdor nomi</Text>
            </View>
            <View style={[styles.item, {alignItems: 'center'}]}>
              <Text style={styles.info}>Abdullayev Abdulla</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: style.backgroundColor,
              width: '100%',
              height: 2,
            }}
          />
          <View style={styles.header}>
            <View style={[styles.item, {left: 60}]}>
              <Text style={styles.info}>Qarz summasi</Text>
            </View>
            <View style={[styles.item, {alignItems: 'center'}]}>
              <Text style={styles.info}>1,0 mln so’m</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: style.backgroundColor,
              width: '100%',
              height: 2,
            }}
          />
          <View style={styles.header}>
            <View style={[styles.item, {left: 60}]}>
              <Text style={styles.info}>Qarz olingan sana </Text>
            </View>
            <View style={[styles.item, {alignItems: 'center'}]}>
              <Text style={styles.info}>22.10.2021</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: style.backgroundColor,
              width: '100%',
              height: 2,
            }}
          />
          <View style={styles.header}>
            <View style={[styles.item, {left: 60}]}>
              <Text style={styles.info}>Qarz qaytarilgan sana</Text>
            </View>
            <View style={[styles.item, {alignItems: 'center'}]}>
              <Text style={styles.info}>22.10.2022</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: style.backgroundColor,
              width: '100%',
              height: 2,
            }}
          />
          <View style={styles.header}>
            <View style={[styles.item, {left: 60}]}>
              <Text style={styles.info}>Qaytarilgan summa </Text>
            </View>
            <View style={[styles.item, {alignItems: 'center'}]}>
              <Text style={styles.info}>1.0 mln so’m</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: style.backgroundColor,
              width: '100%',
              height: 2,
            }}
          />
          <View style={styles.header}>
            <View style={[styles.item, {left: 60}]}>
              <Text style={styles.info}>Hujjatla</Text>
            </View>
            <View style={[styles.item, {alignItems: 'center'}]}>
              <Text
                onPress={() => {
                  navigation.navigate('DownloadStatistic');
                }}
                style={[
                  styles.info,
                  {color: style.blue, textDecorationLine: 'underline'},
                ]}>
                22/10/2021/000001
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.buttonInsideContainer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.registerButton}>
              <Text style={styles.textButton}>
                Qarz muddatini uzaytirishni so’rash
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonInsideContainer}>
            <TouchableOpacity activeOpacity={0.8} style={styles.registerButton}>
              <Text style={styles.textButton}>Qarzni qaytarish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CreditorDebitor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },
  buttonInsideContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  item: {
    flex: 1,
  },
  textButton: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: '#fff',
  },
  registerButton: {
    width: '85%',
    height: style.buttonHeight,
    backgroundColor: style.blue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
  },
  info: {
    color: style.textColor,
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
    textAlign: 'left',
  },
  header: {
    backgroundColor: '#fff',
    height: style.height / 15,
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
  },
  main: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
  },
  aboutUsContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 10,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    overflow: 'hidden',
  },
});
