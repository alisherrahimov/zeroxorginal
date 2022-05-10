import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ZeroxIcon from '../../images/ZeroxIcon.svg';
import {style} from '../../theme/style';
import {DrawerIcon, AlarmIcon} from '../../helper/homeIcon';
import {useNavigation} from '@react-navigation/native';
const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.DrawerContainer}>
      <View style={styles.drawer}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}>
            <DrawerIcon width={25} height={25} />
          </TouchableOpacity>
          <View style={{marginLeft: 20}}>
            <ZeroxIcon width={80} height={35} />
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
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  userNameText: {
    fontSize: style.fontSize.small,
    fontFamily: style.fontFamilyMedium,
    color: '#fff',
  },
  ImageButton: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  drawer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  DrawerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingTop: 10,
    paddingBottom: 10,
    height: style.height / 8,
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
  AlarmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 0.35,
  },
});
