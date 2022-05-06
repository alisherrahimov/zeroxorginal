import {
  //   ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackGroundIcon, PurseIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import BackButton from '../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const UserMoneyResult = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flex: 0.4}}>
        <BackGroundIcon width="100%" height="100%" />
      </View>
      <View style={styles.main}>
        <View style={{marginTop: 15}}>
          <BackButton
            navigation={navigation}
            backgroundColor={'#fff'}
            IconColor={style.blue}
          />
        </View>
        <View style={styles.aboutUsContainer}>
          <View style={{width: '90%', alignSelf: 'center', marginVertical: 20}}>
            <View>
              <View style={styles.registerButton}>
                <Text style={styles.textButton}>
                  “000001AA” raqamli mobil hisob{' '}
                </Text>
              </View>
            </View>
            <View>
              <View style={styles.card}>
                <View style={styles.insideMoney}>
                  <Text style={styles.hisob}>Mobil hisob</Text>
                  <PurseIcon width={35} height={35} />
                </View>
                <View>
                  <Text style={styles.money}>$53,897</Text>
                </View>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('PayScreen')}
                activeOpacity={0.8}
                style={styles.registerButton}>
                <Text style={styles.textButton}>Mobil hisobni to’ldirish </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.registerButton, {marginTop: 20}]}>
                <Text style={styles.textButton}>
                  Mobil hisobdan mobil{'\n'}hisobga pul o`tkazish
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserMoneyResult;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },
  money: {
    fontSize: style.fontSize.s,
    fontFamily: style.fontFamilyMedium,
    color: style.MoneyColor,
  },
  hisob: {
    fontSize: style.fontSize.s,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
  textButton: {
    fontSize: style.fontSize.xs,
    fontFamily: style.fontFamilyMedium,
    color: '#fff',
  },
  registerButton: {
    width: '100%',
    height: style.buttonHeight,
    backgroundColor: style.blue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideMoney: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    width: '100%',
    elevation: 6,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 20,
  },
  item: {
    flex: 1,
  },
  info: {
    color: style.textColor,
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xx,
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
