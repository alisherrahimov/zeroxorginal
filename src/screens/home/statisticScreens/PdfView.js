import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';
import {useNavigation, useRoute} from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import LottieView from 'lottie-react-native';
import {style} from '../../../theme/style';
const PdfView = () => {
  const [loading, setLoading] = React.useState(true);
  const [tutorial, setTutorial] = React.useState(false);
  const route = useRoute();
  const {pdf} = route.params;
  const navigation = useNavigation();
  React.useEffect(() => {
    if (loading == false) {
      setTutorial(true);
    }
    setTimeout(() => {
      setTutorial(false);
    }, 4000);
  }, [loading]);
  return (
    <>
      <View
        style={{
          position: 'absolute',
          marginTop: 40,
          marginLeft: 15,
          zIndex: 1,
        }}>
        <BackButton
          IconColor={'#fff'}
          backgroundColor={style.blue}
          navigation={navigation}
        />
      </View>

      <View style={{flex: 1, backgroundColor: '#fff'}}>
        {loading && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={'large'} color={style.blue} />
          </View>
        )}
        {tutorial && (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}>
            <LottieView
              speed={1}
              source={require('../../../images/tutorial.json')}
              autoPlay
              autoSize
              style={{width: style.width / 4, height: style.width / 4}}
            />
          </View>
        )}
        <Pdf
          trustAllCerts={true}
          enablePaging={true}
          horizontal
          activityIndicator={() => (
            <ActivityIndicator size={'large'} color={style.blue} />
          )}
          source={{
            uri: pdf,
            method: 'GET',
          }}
          onLoadProgress={number => {
            console.log(number);
            if (number > 0.92) {
              setLoading(false);
            }
          }}
          style={styles.pdf}
        />
      </View>
    </>
  );
};

export default PdfView;

const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
  },
});
