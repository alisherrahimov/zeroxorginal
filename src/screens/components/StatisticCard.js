import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {style} from '../../theme/style';
import {useNavigation} from '@react-navigation/native';

const StatisticCard = ({title, type, color, data, person}) => {
  const navigation = useNavigation();
  const ListRender = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => {
          if (color == style.blue) {
            navigation.navigate('Debitor', {type: type, item});
          } else {
            navigation.navigate('CreditorDebitor', {type: type});
          }
        }}
        style={styles.listContainer}>
        <View style={styles.list}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 20,
              width: 35,
            }}>
            <Text
              style={{
                color: style.textColor,
                fontFamily: style.fontFamilyMedium,
                fontSize: style.fontSize.small,
              }}>
              {index + 1}
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              maxWidth: style.width / 2.2,
              flex: 1,
              marginLeft: 10,
            }}>
            <Text style={[styles.info, {fontSize: style.fontSize.small}]}>
              {person == 'debitor'
                ? item?.creditor?.first_name + ' ' + item?.creditor?.last_name
                : item?.debitor?.first_name + ' ' + item?.debitor?.last_name}
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: style.width / 3,
              height: 20,
              flex: 1,
            }}>
            <Text style={[styles.info, {fontSize: style.fontSize.small}]}>
              {item?.amount} {item?.currency}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 20, marginTop: 20}}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{marginTop: 10}}>{HeaderComponent()}</View>
      <View>
        <FlatList
          style={{
            height: style.height / 1.6,
            maxHeight: style.height / 1.6,
            minHeight: style.height / 1.6,
            overflow: 'scroll',
            borderRadius: 10,
          }}
          data={data}
          ItemSeparatorComponent={() => (
            <View
              style={{
                backgroundColor: style.backgroundColor,
                width: '100%',
                height: 2,
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return <ListRender item={item} index={index} />;
          }}
        />
      </View>
    </View>
  );
};
export const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <View
        style={{
          paddingLeft: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 35,
            height: 20,
          }}>
          <Text style={styles.info}>№</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            maxWidth: style.width / 2.7,
            height: 20,
            flex: 1,
            marginLeft: 10,
          }}>
          <Text style={[styles.info, {fontSize: style.fontSize.small}]}>
            Qarzdor nomi
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: style.width / 2.7,
            height: 20,
            flex: 1,
          }}>
          <Text style={[styles.info, {fontSize: style.fontSize.small}]}>
            Qarz summasi
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StatisticCard;

const styles = StyleSheet.create({
  title: {
    fontSize: style.fontSize.xs,
    color: style.textColor,
    fontFamily: style.fontFamilyBold,
  },
  list: {
    flexDirection: 'row',
  },
  listContainer: {
    backgroundColor: '#fff',
    height: style.height / 15,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  container: {
    width: '100%',
  },
  info: {
    color: style.textColor,
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
  },
  header: {
    height: style.height / 16,
    width: '100%',
    backgroundColor: style.backgroundColor,
    justifyContent: 'center',
  },
});
