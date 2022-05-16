import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {style} from '../../theme/style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  WithZeroxIcon,
  TwoPhoneIcon,
  BackGroundIcon,
} from '../../helper/homeIcon';
import {useNavigation} from '@react-navigation/native';
import Card from '../components/Card';
import ListCard from '../components/ListCard';
import BerilganQarzIcon from '../../images/home/QarzOlganIcon.svg';
import MuddatUtganPlus from '../../images/home/MuddatUtgan+.svg';
import MuddatUtganMinus from '../../images/home/MuddatUtgan-.svg';
import OlinganQarz from '../../images/home/OlingaQarz.svg';
import ZeroxIcon from '../../images/ZeroxIcon.svg';
import Header from '../components/Header';
import Slider from '../components/Slider';
const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          position: 'absolute',
          height: style.height / 2.5,
          width: '100%',
        }}>
        <BackGroundIcon width="100%" height="100%" />
      </View>
      <View style={styles.header}>
        <Header />
        <View>
          <View style={styles.appInfoMainContainer}>
            <Slider />
          </View>
        </View>
        <View style={{flex: 1, marginTop: 20}}>
          <View style={[styles.cardViewContainer, {marginTop: 0}]}>
            <View>
              <Card
                width={style.width / 2.3}
                title={'Berilgan qarz'}
                Icon={OlinganQarz}
                type={0}
                color={style.blue}
              />
            </View>
            <View>
              <Card
                width={style.width / 2.3}
                title={'Olingan qarz'}
                Icon={BerilganQarzIcon}
                type={0}
                color={'red'}
              />
            </View>
          </View>
          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={styles.shundan}>Shundan</Text>
          </View>
          <View style={styles.cardViewContainer}>
            <View>
              <Card
                width={style.width / 2.3}
                title={'Muddati o’tgan'}
                Icon={MuddatUtganPlus}
                type={2}
                color={style.blue}
              />
            </View>
            <View>
              <Card
                width={style.width / 2.3}
                title={'Muddati o’tgan'}
                Icon={MuddatUtganMinus}
                type={2}
                color={'red'}
              />
            </View>
          </View>
          {/* <View style={styles.cardViewContainer}>
            <View>
              <ListCard title={'Muddati o’tgan\n(debitor)'} />
            </View>
            <View>
              <ListCard title={'Muddati o’tgan\n(kreditor)'} />
            </View>
          </View> */}
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
  shundan: {
    fontSize: style.fontSize.xs,
    color: style.textColor,
    fontFamily: style.fontFamilyMedium,
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
    height: style.height / 4,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
    maxWidth: style.width / 3,
  },
  userButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameText: {
    fontSize: style.fontSize.small,
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
    fontSize: style.fontSize.small,
    fontFamily: style.fontFamilyMedium,
  },
});
