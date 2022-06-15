import {
  DeviceEventEmitter,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {OpenFaceIdNativeScreen} from '../nativemodule/android.event';
import {useNavigation, useRoute} from '@react-navigation/native';
import {URL} from './constants';
import axios from 'axios';
const Test = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {token} = route.params;
  const [code, setCode] = useState({code: '', comp_id: ''});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const Indentificator = async () => {
    DeviceEventEmitter.addListener('code', async data => {
      setCode({code: data?.code, comp_id: data?.comp_id});
      setLoading(true);

      try {
        const response = await axios.post(
          URL + '/user/isactivate',
          {
            code: data.code,
          },
          {headers: {Authorization: `Bearer ${token}`}},
        );
        if (response.data.success) {
          setData(response.data);
          setLoading(false);
          navigation.navigate('BottomTabNavigator');
        }
      } catch (error) {
        setError(true);
        setData(error.response.data);
        setLoading(false);
      }
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
      <ScrollView>
        <Text
          onPress={() => {
            OpenFaceIdNativeScreen();
          }}
          style={{color: 'red', marginTop: 60}}>
          MYID ruyxatdan utish
        </Text>
        {error && <Text style={{color: 'red'}}>USER active</Text>}
        <Text style={{color: 'red'}}>
          code : {code.code}
          {'\n'}comp_id : {code.comp_id}
        </Text>
        {loading ? (
          <Text style={{color: 'red'}}>Loading...</Text>
        ) : (
          <Text style={{color: 'red'}}>{JSON.stringify(data)}</Text>
        )}
        <Text
          style={{color: '#000'}}
          onPress={() => {
            navigation.navigate('BottomTabNavigator');
          }}>
          ASOSIY MENUGA O"TISH
        </Text>
      </ScrollView>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({});
