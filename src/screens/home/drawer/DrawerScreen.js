import {
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import {PurseIcon} from '../../../helper/homeIcon';
import {useSelector} from 'react-redux';

const DrawerScreen = () => {
  const {user} = useSelector(state => state.HomeReducer);

  const navigation = useNavigation();
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://play.google.com/store/apps/details?id=uz.yt.eimzo',
        url: 'https://play.google.com/store/apps/details?id=uz.yt.eimzo',
        title: 'Ishonch kafolati',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('sharedactiveityType', result.activityType);
        } else {
          // shared
          console.log('shared');
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('dis');
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: 40,
          }}>
          <Logo width={100} height={style.height / 14} />
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
        <View style={{marginTop: 10}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UserMoneyResult', {user: user.data});
            }}
            activeOpacity={0.8}>
            <View style={styles.MobileInfoContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={styles.moneyTitle}>Mobil hisob: </Text>
                  <Text style={styles.money}>
                    {`${user?.data?.balance}`} so'm
                  </Text>
                </View>
              </View>
              <View style={{marginLeft: 5}}>
                <PurseIcon width={25} height={25} />
              </View>
            </View>
          </TouchableOpacity>
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
            <TouchableOpacity onPress={onShare} style={styles.button}>
              <ShareIcon width={25} height={25} />
              <Text style={styles.buttonText}>Do???stlar bilan ulashing</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Support');
              }}
              style={styles.button}>
              <ServiceSupport width={25} height={25} />
              <Text style={styles.buttonText}>Qo???llab quvvatlash xizmati</Text>
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
  moneyTitle: {
    color: '#fff',
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
  },
  money: {
    color: '#fff',
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
  },
  MobileInfoContainer: {
    padding: 5,
    backgroundColor: style.blue,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: style.fontSize.small - 1,
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
    fontSize: style.fontSize.small,
    color: style.textColor,
    marginTop: 10,
  },
  buttonContainer: {
    fleX: 1,
    marginTop: 20,
  },
});
