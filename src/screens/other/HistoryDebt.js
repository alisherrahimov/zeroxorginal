import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  VirtualizedList,
  View,
  Image,
} from 'react-native';
import React from 'react';
import {BackGroundIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import BackButton from '../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const userdata = [
  {
    name: 'Shavkatov Shahzod Alisherovich',
    id: 1,
    img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=mm',
  },
  {
    name: 'Shavkatov Shahzod Alisherovich',
    id: 2,
    img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=mm',
  },
  {
    name: 'Shavkatov Shahzod Alisherovich',
    id: 3,
    img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=mm',
  },

  {
    name: 'Shavkatov Shahzod Alisherovich',
    id: 4,
    img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=mm',
  },
  {
    name: 'Shavkatov Shahzod Alisherovich',
    id: 5,
    img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=mm',
  },
  {
    name: 'Shavkatov Shahzod Alisherovich',
    id: 6,
    img: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200&r=pg&d=mm',
  },
];
const HistoryDebt = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: style.width,
            position: 'absolute',
            height: style.height / 3,
          }}>
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
            <View
              style={{width: '100%', alignSelf: 'center', marginVertical: 20}}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.title}>
                  Oldin oldi-berdi qilingan foydalanuvchilar
                </Text>
              </View>
              <View style={[styles.max]}>
                <View style={{alignSelf: 'center'}}>
                  <View
                    style={{
                      position: 'absolute',
                      zIndex: 1,
                      height: style.height / 18,
                      marginLeft: 10,
                      justifyContent: 'center',
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                    }}>
                    <Icon name="search" color={style.textColor} size={20} />
                  </View>
                  <View>
                    <TextInput
                      placeholderTextColor={'#A0AEC0'}
                      placeholder="Qidirish..."
                      keyboardType="default"
                      style={[styles.TextInput]}
                    />
                  </View>
                </View>
              </View>
              <View style={{marginTop: 20, paddingLeft: 20, paddingRight: 20}}>
                {userdata.map((item, index) => (
                  <View key={item.id} style={styles.listButtonContainer}>
                    <TouchableOpacity
                      style={styles.TouchableOpacity}
                      activeOpacity={0.8}>
                      <Image
                        source={{uri: item.img}}
                        style={styles.image}
                        resizeMode="cover"
                      />
                      <Text style={styles.username}>{item.name}</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HistoryDebt;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },
  username: {
    fontSize: style.fontSize.xx,
    color: style.textColor,
    fontFamily: style.fontFamilyMedium,
    marginLeft: 10,
    maxWidth: '70%',
  },
  TouchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: style.width / 5,
    height: style.width / 5,
    borderRadius: 50,
  },
  listButtonContainer: {
    width: '100%',
    height: style.height / 8,
  },
  max: {
    width: '90%',
    alignSelf: 'center',
    flex: 1,
    marginTop: 20,
  },

  TextInput: {
    height: style.height / 18,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 5,
    fontSize: style.fontSize.xs,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 40,
    width: style.width / 1.5,
  },

  title: {
    fontSize: style.fontSize.s,
    fontFamily: style.fontFamilyBold,
    color: style.textColor,
    textAlign: 'center',
  },

  main: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  aboutUsContainer: {
    backgroundColor: '#EAF2FB',
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
    marginBottom: 10,
  },
});
