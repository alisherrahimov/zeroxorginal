import {
  Platform,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackGroundIcon} from '../../../helper/homeIcon';
import {style} from '../../../theme/style';
import BackButton from '../../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import ShareIcon from '../../../images/home/share.svg';
import DownloadIcon from '../../../images/home/download.svg';
import RNFetchBlob from 'rn-fetch-blob';
import Toast from 'react-native-toast-message';
import {toastConfig} from '../../components/ToastConfig';
const DownloadStatistic = () => {
  const navigation = useNavigation();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
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

  const onDownload = async () => {
    const random = Math.floor(Math.random() * 100000);
    Toast.show({
      autoHide: true,
      visibilityTime: 3000,
      position: 'bottom',
      type: 'success',
      text1: 'Yuklash boshlandi...',
    });
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        notification: true,
        title: 'PDF',
        mime: 'application/pdf',
        path: RNFetchBlob.fs.dirs.DownloadDir + `/${random}.pdf`,
        useDownloadManager: true,
      },
    })
      .fetch('GET', 'http://www.africau.edu/images/default/sample.pdf')
      .then(res => {
        console.log(res.path());
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <View style={styles.container}>
      <View
        style={{position: 'absolute', height: style.height / 3, width: '100%'}}>
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
          <View style={{marginTop: 20}}>
            <Text style={styles.title}>
              20/11/2021/000001-sonli qarz shartnomasi va ilova hujjatlar
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PdfView', {
                pdf: 'http://www.africau.edu/images/default/sample.pdf',
              });
            }}
            activeOpacity={0.95}
            style={{alignItems: 'center', justifyContent: 'center'}}>
            <View style={styles.pdfView}>
              <Text style={styles.userName}>PDF</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              marginBottom: 20,
            }}>
            <TouchableOpacity
              onPress={onDownload}
              activeOpacity={0.8}
              style={styles.download}>
              <DownloadIcon width="20%" height="100%" />
              <Text style={styles.downloadText}>Yuklab olish</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onShare}
              activeOpacity={0.8}
              style={styles.download}>
              <ShareIcon width="20%" height="100%" />
              <Text style={styles.downloadText}>Ulashish</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Toast config={toastConfig} />
    </View>
  );
};

export default DownloadStatistic;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },
  pdfView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 20,
  },
  userName: {
    fontSize: style.fontSize.small,
    color: style.textColor,
    fontFamily: style.fontFamilyBold,
    padding: 80,
    alignSelf: 'center',
  },
  download: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: style.StatusbarColor,
    padding: 10,
    width: style.width / 3,
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
    fontSize: style.fontSize.xx,
    color: style.textColor,
    fontFamily: style.fontFamilyMedium,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
