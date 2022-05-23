import {
  Linking,
  Platform,
  ScrollView,
  //   ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackGroundIcon, TwoPhoneIcon} from '../../../../helper/homeIcon';
import {style} from '../../../../theme/style';
import BackButton from '../../../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ShareIcon from '../../../../images/home/share.svg';
import DownloadIcon from '../../../../images/home/download.svg';
const Support = () => {
  const navigation = useNavigation();
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
      <View style={styles.main}>
        <View style={{marginTop: Platform.OS === 'android' ? 40 : null}}>
          <BackButton
            navigation={navigation}
            backgroundColor={'#fff'}
            IconColor={style.blue}
          />
        </View>
        <View style={styles.aboutUsContainer}>
          <View>
            <Text style={styles.title}>Qo`llab-quvvatlash xizmati </Text>
          </View>
          <View
            style={{
              marginTop: 20,
            }}>
            <TouchableOpacity onPress={() => {}} style={styles.enterButton}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Ko`p takrorlanadigan savollar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.enterButton}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Mutaxassis bilan chat
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.enterButton}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Telegram orqali yozing
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.enterButton}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Bizga yozing
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.SupportMeContainer}>
            <Text
              onPress={() => {
                Linking.openURL('tel:+998937524411');
              }}
              style={styles.SupportText}>
              +998 93 752 44 11 Qo`llab-quvvatlash telefon raqami
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },
  SupportMeContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  SupportText: {
    fontFamily: style.fontFamilyMedium,
    color: style.blue,
    fontSize: style.fontSize.small,
    textDecorationLine: 'underline',
  },
  enterButton: {
    width: '90%',
    backgroundColor: style.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    height: style.textInputHeight,
    alignSelf: 'center',
    marginTop: 20,
  },
  enterText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xs,
    color: style.textColor,
  },

  main: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
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

  title: {
    fontSize: style.fontSize.xs,
    color: style.textColor,
    fontFamily: style.fontFamilyBold,
    alignSelf: 'center',
  },
});
