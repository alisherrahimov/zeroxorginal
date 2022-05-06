import {StyleSheet, View} from 'react-native';
import React from 'react';
import {style} from '../../theme/style';
import AppIcon from '../../images/AppIcon.svg';
import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', alignSelf: 'center'}}>
        <LottieView
          source={require('../../images/jsonloading/lf30_editor_2wueqzih.json')}
          style={{width: style.width / 1.5, height: style.width / 1.5}}
          loop={true}
          autoPlay={true}
        />
        <View
          style={[
            {
              alignItems: 'center',
              justifyContent: 'center',
              ...StyleSheet.absoluteFillObject,
            },
          ]}>
          <AppIcon width={style.width / 8} height={style.width / 8} />
        </View>
      </View>
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
