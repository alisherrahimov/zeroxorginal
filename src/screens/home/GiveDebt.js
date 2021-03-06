import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AlarmIcon, BackGroundIcon, DrawerIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import {useNavigation} from '@react-navigation/native';
import {ShareIcon} from '../../helper/drawerIcon';
import Header from '../components/Header';
import {useSelector} from 'react-redux';

const GiveDebt = () => {
  const navigation = useNavigation();
  const {user} = useSelector(state => state.HomeReducer);
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          height: style.height / 2.5,
          width: '100%',
        }}>
        <BackGroundIcon width="100%" height="100%" />
      </View>
      <Header user={user.data} />
      <View style={styles.header}>
        <View style={styles.aboutUsContainer}>
          <View>
            <Text style={styles.title}>Qidiruv</Text>
          </View>
          <View style={{marginTop: 20, marginBottom: 20}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('SearchUserScreen');
              }}
              style={styles.enterButton}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Jismoniy shaxsni qidirish
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('SearchJuridicUser');
              }}
              style={[styles.enterButton, {marginTop: 20}]}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Yuridik shaxsni qidirish
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('HistoryDebt');
              }}
              style={[styles.enterButton, {marginTop: 20}]}>
              <Text
                style={[
                  styles.enterText,
                  {color: '#fff', textAlign: 'center'},
                ]}>
                Oldin oldi-berdi{'\n'}qilingan foydalanuvchilar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GiveDebt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.backgroundColor,
  },
  aboutUsContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 15,

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
  header: {
    width: '95%',
    flex: 1,
    alignSelf: 'center',
  },
  userNameText: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: '#fff',
  },
  DrawerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  enterButton: {
    width: '85%',
    backgroundColor: style.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    height: style.textInputHeight,
    alignSelf: 'center',
  },
  drawer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  AlarmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageButton: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  enterText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xx,
    color: style.textColor,
    padding: 5,
  },

  title: {
    fontSize: style.fontSize.xs,
    color: style.textColor,
    fontFamily: style.fontFamilyBold,
    alignSelf: 'center',
  },
});
