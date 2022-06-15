import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BackGroundIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import {useNavigation, useRoute} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import ListCard from '../components/ListCard';

const MuddatOzQolgan = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {uzs, usd} = route.params;
  return (
    <View>
      <View
        style={{position: 'absolute', height: style.height / 3, width: '100%'}}>
        <BackGroundIcon width="100%" height="100%" />
      </View>
      <View
        style={{
          marginTop: Platform.OS === 'android' ? 40 : null,
          position: 'absolute',
          marginLeft: 15,
        }}>
        <BackButton
          navigation={navigation}
          backgroundColor={'#fff'}
          IconColor={style.blue}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.cardViewContainer}>
          <View>
            <ListCard
              type={2}
              width={style.width / 2.3}
              color={style.blue}
              uzs={uzs}
              usd={usd}
              title={'Muddati oz qolgan\n(debitor)'}
            />
          </View>
          <View>
            <ListCard
              type={2}
              width={style.width / 2.3}
              color={'red'}
              uzs={uzs}
              usd={usd}
              title={'Muddati oz qolgan\n(kreditor)'}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MuddatOzQolgan;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },
  main: {
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
  },
  cardViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: style.height / 6,
  },
});
