import {
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
const QrCode = () => {
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
          <View>
            <Text style={styles.title}>QR kod</Text>
          </View>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.userName}>Shavkatov Shahzod</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <TouchableOpacity style={styles.download}>
              <DownloadIcon width="20%" height="100%" />
              <Text style={styles.downloadText}>Yuklab olish</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.download}>
              <ShareIcon width="20%" height="100%" />
              <Text style={styles.downloadText}>Ulashish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QrCode;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },
  userName: {
    fontSize: style.fontSize.xx,
    color: style.textColor,
    fontFamily: style.fontFamilyMedium,
  },
  download: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: style.StatusbarColor,
    padding: 10,
    width: style.width / 3,
    maxWidth: style.width / 3,
    flexDirection: 'row',
  },
  downloadText: {
    color: '#fff',
    fontSize: style.fontSize.small,
    fontFamily: style.fontFamilyMedium,
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
