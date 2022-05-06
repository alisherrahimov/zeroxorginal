import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AlarmIcon, BackGroundIcon, DrawerIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import {useNavigation} from '@react-navigation/native';
import {ShareIcon} from '../../helper/drawerIcon';

const TakeDebt = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{flex: 0.4}}>
        <BackGroundIcon width="100%" height="70%" />
      </View>
      <View style={styles.header}>
        <View style={styles.DrawerContainer}>
          <View style={styles.drawer}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.openDrawer();
                  }}>
                  <DrawerIcon width={30} height={30} />
                </TouchableOpacity>
              </View>
              <View>
                <View style={styles.AlarmContainer}>
                  <View style={{marginRight: 20}}>
                    <TouchableOpacity>
                      <AlarmIcon width={25} height={25} />
                    </TouchableOpacity>
                  </View>
                  <View style={{}}>
                    <TouchableOpacity style={styles.ImageButton}>
                      <Image
                        style={{width: 25, height: 25, borderRadius: 50}}
                        resizeMode="cover"
                        source={{
                          uri: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
                        }}
                      />
                      <Text style={styles.userNameText}>Name</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.aboutUsContainer}>
          <View>
            <Text style={styles.title}>Qidiruv</Text>
          </View>
          <View style={{marginTop: 20, marginBottom: 20}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CheckSmsPassword');
              }}
              style={styles.enterButton}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Jismoniy shaxsni qidirish
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CheckSmsPassword');
              }}
              style={[styles.enterButton, {marginTop: 20}]}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Yuridik shaxsni qidirish
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CheckSmsPassword');
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

export default TakeDebt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.backgroundColor,
  },
  aboutUsContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 15,
    flex: 1,
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
    flex: 1,
    position: 'absolute',
    width: '90%',
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
    fontSize: style.fontSize.s,
    color: style.textColor,
    padding: 5,
  },

  title: {
    fontSize: style.fontSize.s,
    color: style.textColor,
    fontFamily: style.fontFamilyBold,
    alignSelf: 'center',
  },
});
