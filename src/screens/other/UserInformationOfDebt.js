import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackGroundIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import BackButton from '../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import Card from '../components/Card';
import BerilganQarzIcon from '../../images/home/QarzOlganIcon.svg';
import MuddatUtganPlus from '../../images/home/MuddatUtgan+.svg';
import MuddatUtganMinus from '../../images/home/MuddatUtgan-.svg';
import OlinganQarz from '../../images/home/OlingaQarz.svg';
import GiveDebtIcon from '../../images/tab/GiveDebtIconBlue.svg';
import ListCard from '../components/ListCard';
const UserInformationOfDebt = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          width: style.width,
          position: 'absolute',
          height: style.height / 3,
        }}>
        <BackGroundIcon width="100%" height="100%" />
      </View>
      <View
        style={{
          marginTop: Platform.OS === 'android' ? 40 : 40,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          marginLeft: 15,
          width: '90%',
          zIndex: 1,
        }}>
        <BackButton
          navigation={navigation}
          backgroundColor={'#fff'}
          IconColor={style.blue}
        />
        <View style={styles.timeContainer}>
          <Text style={styles.time}>02:00</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <View style={styles.aboutUsContainer}>
            <View style={{width: '100%', alignSelf: 'center'}}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.title}>Qidiruv natijasi</Text>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginHorizontal: 10,
                }}>
                <View style={styles.userImageContainer}>
                  <Image
                    style={styles.userImage}
                    source={{
                      uri: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    maxWidth: '70%',
                    width: '70%',
                  }}>
                  <View
                    style={{
                      borderBottomColor: style.blue,
                      borderBottomWidth: 1,
                      paddingBottom: 3,
                    }}>
                    <Text style={[styles.phoneText, {color: style.blue}]}>
                      FISH :
                    </Text>
                    <Text style={styles.phoneText}>
                      Shavkatov Shahzod Alisherovich
                    </Text>
                  </View>
                  <View
                    style={{
                      borderBottomColor: style.blue,
                      borderBottomWidth: 1,
                      paddingBottom: 3,
                    }}>
                    <Text style={[styles.phoneText, {color: style.blue}]}>
                      Ro`yxatdan o`tgan:
                    </Text>
                    <Text style={styles.phoneText}>13.07.2022</Text>
                  </View>
                  <View
                    style={{
                      borderBottomColor: style.blue,
                      borderBottomWidth: 1,
                      paddingBottom: 3,
                    }}>
                    <Text style={[styles.phoneText, {color: style.blue}]}>
                      ID raqami:
                    </Text>
                    <Text style={styles.phoneText}>000001AA</Text>
                  </View>
                  <View
                    style={{
                      borderBottomColor: style.blue,
                      borderBottomWidth: 1,
                      paddingBottom: 3,
                    }}>
                    <Text style={[styles.phoneText, {color: style.blue}]}>
                      Status:
                    </Text>
                    <Text style={styles.phoneText}>97%</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{flex: 1, marginHorizontal: 10}}>
              <View style={styles.cardViewContainer}>
                <View>
                  <Card
                    width={style.width / 2.5}
                    disabled={true}
                    title={'Berilgan\nqarz'}
                    Icon={OlinganQarz}
                    type={0}
                    color={style.blue}
                  />
                </View>
                <View>
                  <Card
                    width={style.width / 2.5}
                    disabled={true}
                    title={'Olingan\nqarz'}
                    Icon={BerilganQarzIcon}
                    type={0}
                    color={'red'}
                  />
                </View>
              </View>
              <View style={styles.cardViewContainer}>
                <View>
                  <Card
                    width={style.width / 2.5}
                    disabled={true}
                    title={'Muddati\no’tgan'}
                    Icon={MuddatUtganPlus}
                    type={2}
                    color={style.blue}
                  />
                </View>
                <View>
                  <Card
                    width={style.width / 2.5}
                    disabled={true}
                    title={'Muddati\no’tgan'}
                    Icon={MuddatUtganMinus}
                    type={2}
                    color={'red'}
                  />
                </View>
              </View>
              <View style={styles.cardViewContainer}>
                <View>
                  <ListCard
                    disabled={true}
                    width={style.width / 2.5}
                    title={'Muddati oz qolgan\n(debitor)'}
                    type={2}
                    color={style.blue}
                  />
                </View>
                <View>
                  <ListCard
                    disabled={true}
                    width={style.width / 2.5}
                    title={'Muddati oz qolgan\n(kreditor'}
                    type={2}
                    color={'red'}
                  />
                </View>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('GiveDebtUser');
                  }}
                  activeOpacity={0.8}
                  style={styles.qarzberish}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '100%',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: style.fontFamilyMedium,
                        fontSize: style.fontSize.xx,
                        color: '#fff',
                      }}>
                      Qarz berish
                    </Text>
                    <View
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: 8,
                      }}>
                      <View style={{padding: 5}}>
                        <GiveDebtIcon width={25} height={25} />
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserInformationOfDebt;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },
  qarzberish: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: style.blue,
    borderRadius: 10,
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  cardViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
    alignSelf: 'center',
  },
  userImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  userImage: {
    width: style.width / 7,
    height: style.width / 7,
    borderRadius: style.width / 6,
  },
  time: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },

  main: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: style.height / 7,
  },
  aboutUsContainer: {
    backgroundColor: '#EAF2FB',
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
    marginBottom: 10,
    paddingVertical: 20,
  },
  TextInput: {
    width: '100%',
    height: style.textInputHeight,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 10,
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
  TextInputLabelContainer: {
    borderColor: style.textColor,
    borderWidth: 0.5,
    borderRadius: 6,
    width: '90%',
    flexDirection: 'row',
    marginTop: 30,
    alignSelf: 'center',
  },
  phoneText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
    color: style.textColor,
  },
  inputTitle: {
    position: 'absolute',
    marginLeft: 15,
    flex: 1,
    zIndex: 1,
    top: -10,
    backgroundColor: '#EAF2FB',
    paddingLeft: 5,
    paddingRight: 5,
  },
  containerrr: {
    flex: 1,
    width: style.width / 2.4,
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
    padding: 10,
  },
  sum: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.MoneyColor,
  },
  title: {
    fontSize: style.fontSize.xs,
    fontFamily: style.fontFamilyBold,
    color: style.textColor,
  },
});
