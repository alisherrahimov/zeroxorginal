import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {style} from '../../theme/style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  DrawerIcon,
  PurseIcon,
  AlarmIcon,
  WithZeroxIcon,
  TwoPhoneIcon,
  BackGroundIcon,
} from '../../helper/homeIcon';
import {useNavigation} from '@react-navigation/native';
import Card from '../components/Card';
import ListCard from '../components/ListCard';

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={style.StatusbarColor}
        animated
        barStyle="light-content"
      />
      <View style={{flex: 0.4}}>
        <BackGroundIcon width="100%" height="100%" />
      </View>
      <View style={styles.header}>
        <View style={styles.DrawerContainer}>
          <View style={styles.drawer}>
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}>
                <DrawerIcon width={30} height={30} />
              </TouchableOpacity>
            </View>
            <View style={styles.MobileInfoContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Text style={styles.moneyTitle}>Mobil hisob: </Text>
                  <Text style={styles.money}>1000000000 so'm </Text>
                </View>
              </View>
              <View style={{marginLeft: 5}}>
                <PurseIcon width={25} height={25} />
              </View>
            </View>
          </View>
          <View style={styles.AlarmContainer}>
            <View style={{left: 20}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Notification');
                }}>
                <AlarmIcon width={25} height={25} />
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('UserScreen');
                }}
                style={styles.ImageButton}>
                <Image
                  style={{width: 25, height: 25, borderRadius: 50}}
                  resizeMode="cover"
                  source={{
                    uri: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
                  }}
                />
                <Text>Name</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.appInfoMainContainer}>
            <View style={styles.appInfoContainer}>
              <View>
                <WithZeroxIcon width={140} height={30} />
              </View>
              <View>
                <Text style={styles.moneyTitle}>
                  Ilovaning barcha imkoniyatlari{'\n'}sizning smartfoningizda.
                </Text>
              </View>
              <View style={{marginTop: 10}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AboutUs');
                  }}
                  style={styles.allInfoButton}>
                  <Text style={styles.userNameText}>Batafsil ma’lumot</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <TwoPhoneIcon width={160} height={160} />
            </View>
          </View>
        </View>
        <View style={{flex: 1, marginTop: 20}}>
          <View style={[styles.cardViewContainer, {marginTop: 0}]}>
            <View>
              <Card title={'Debitor \nqarzdorlik'} type={1} />
            </View>
            <View>
              <Card title={'Kreditor \nqarzdorlik'} type={1} />
            </View>
          </View>
          <View style={styles.cardViewContainer}>
            <View>
              <Card title={'Muddati o’tgan\n(debitor)'} type={2} />
            </View>
            <View>
              <Card title={'Muddati o’tgan\n(kreditor)'} type={2} />
            </View>
          </View>
          <View style={styles.cardViewContainer}>
            <View>
              <ListCard title={'Muddati o’tgan\n(debitor)'} />
            </View>
            <View>
              <ListCard title={'Muddati o’tgan\n(kreditor)'} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
  },
  drawer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  DrawerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  MobileInfoContainer: {
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    width: style.width / 2.4,
  },
  AlarmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.35,
  },
  appInfoContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    justifyContent: 'center',
  },
  ImageButton: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  appInfoMainContainer: {
    height: style.height / 6,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    marginTop: 10,
  },
  header: {
    flex: 1,
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
  },
  appInfoText: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
  cardViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  allInfoButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: style.StatusbarColor,
    padding: 10,
    width: style.width / 3,
  },
  userButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameText: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: '#fff',
  },

  money: {
    color: style.MoneyColor,
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
  },

  moneyTitle: {
    color: style.textColor,
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
  },
});
