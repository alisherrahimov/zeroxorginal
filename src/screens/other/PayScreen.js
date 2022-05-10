import {
  Platform,
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
import ClickIcon from '../../images/Click.svg';
import PaymeIcon from '../../images/payme.svg';
import PaynetIcon from '../../images/paynet.svg';

const PayScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flex: 0.4}}>
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
          <View style={{width: '90%', alignSelf: 'center', marginVertical: 20}}>
            <View>
              <View style={styles.card}>
                <View style={styles.insideMoney}>
                  <Text style={styles.hisob}>Mobil hisobni to’ldirish</Text>
                </View>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.registerButton}>
                <ClickIcon width={style.width / 4} height={style.width / 12} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.registerButton, {marginTop: 20}]}>
                <PaymeIcon width={style.width / 4} height={style.width / 12} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.registerButton, {marginTop: 20}]}>
                <PaynetIcon width={style.width / 4} height={style.width / 8} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PayScreen;

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
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
    height: style.buttonHeight,
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
