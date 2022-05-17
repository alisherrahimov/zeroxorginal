import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TouchID from 'react-native-touch-id';
const FingerScanner = () => {
  React.useEffect(() => {
    TouchID.isSupported()
      .then(() => {
        TouchID.authenticate('token', {unifiedErrors: false})
          .then(success => {
            console.log(success);
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(err => {
        console.log(err, 'err');
      });
  }, []);
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity
        onPress={onFingerScanner}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 120,
          height: 80,
          backgroundColor: 'red',
        }}> */}
      <Text>FINGER</Text>
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default FingerScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#123212',
  },
});
