import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {BackGroundIcon} from '../../../helper/homeIcon';
import {style} from '../../../theme/style';
import BackButton from '../../components/BackButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StatisticCard from '../../components/StatisticCard';
import {useFetch} from '../../../hooks/useFetch';
import Loading from '../../components/Loading';
import {URL} from '../../constants';

const SearchDebitor = () => {
  const route = useRoute();
  const {title, color, type, url, person} = route.params;
  const {data, error, loading} = useFetch({
    method: 'GET',
    url: URL + url,
  });

  const navigation = useNavigation();
  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={{width: style.width, height: style.height}}>
        <View
          style={{
            position: 'absolute',
            height: style.height / 2.5,
            width: '100%',
          }}>
          <BackGroundIcon width="100%" height="100%" />
        </View>
        <View style={styles.main}>
          <View
            style={{
              marginTop: Platform.OS === 'android' ? 40 : null,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <BackButton
              navigation={navigation}
              backgroundColor={'#fff'}
              IconColor={style.blue}
            />
            <View
              style={{
                flex: 1,
                marginLeft: 15,
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  style={{zIndex: 1, position: 'absolute', marginLeft: 10}}
                  name="search"
                  color={style.textColor}
                  size={15}
                />
                <TextInput
                  placeholder="Qidirish"
                  placeholderTextColor={style.textColor}
                  style={styles.TextInput}
                />
              </View>
            </View>
          </View>
          <View style={styles.aboutUsContainer}>
            <StatisticCard
              title={title}
              type={type}
              color={color}
              data={data?.data}
              person={person}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchDebitor;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },

  aboutUsContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    borderRadius: 10,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  TextInput: {
    backgroundColor: '#fff',
    height: style.height / 16,
    borderRadius: 8,
    width: '90%',
    paddingLeft: 35,
    fontSize: style.fontSize.small,
    color: style.textColor,
    fontFamily: style.fontFamilyMedium,
  },
  main: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
  },
});
