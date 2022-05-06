import {DeviceEventEmitter, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {OpenFaceIdNativeScreen} from '../nativemodule/android.event';
import {useNavigation, useRoute} from '@react-navigation/native';
import {URL} from './constants';
import axios from 'axios';
const Test = () => {
  const navigation = useNavigation();

  const route = useRoute();
  const {status} = route.params;
  const [code, setCode] = useState({code: '', comp_id: ''});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const Indentificator = () => {
    DeviceEventEmitter.addListener('code', data => {
      setCode({code: data?.code, comp_id: data?.comp_id});
      setLoading(true);
      axios
        .post(
          URL + '/user/isactivate',
          {
            code: data.code,
          },
          {
            headers: {
              Authorization: `Bearer ${status.token}`,
            },
          },
        )
        .then(res => {
          setData(res);
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
          setError(true);
        });
    });
    DeviceEventEmitter.addListener('error', data => {
      setError(true);
    });
  };

  useEffect(() => {
    Indentificator();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        onPress={() => {
          OpenFaceIdNativeScreen();
        }}
        style={{color: 'red'}}>
        MYID ruyxatdan utish
      </Text>
      {error && <Text>ERROR</Text>}
      <Text style={{color: 'red'}}>
        code : {code.code}
        {'\n'}comp_id : {code.comp_id}
      </Text>
      {loading ? (
        <Text style={{color: 'red'}}>Loading...</Text>
      ) : (
        <Text style={{color: 'red'}}>{JSON.stringify(data)}</Text>
      )}
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});