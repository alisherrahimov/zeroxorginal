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
    img: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
  },
  {
    name: 'Shavkatov Shahzod Alisherovich',
    id: 2,
    img: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
  },
  {
    name: 'Shavkatov Shahzod Alisherovich',
    id: 3,
    img: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
  },

  {
    name: 'Shavkatov Shahzod Alisherovich',
    id: 4,
    img: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
  },
  {
    name: 'Shavkatov Shahzod Alisherovich',
    id: 5,
    img: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
  },
  {
    name: 'Shavkatov Shahzod Alisherovich',
    id: 6,
    img: 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png',
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
                  Oldin oldi-berdi qilingan{'\n'}foydalanuvchilar
                </Text>
              </View>
              <View style={[styles.max]}>
                <View style={{alignSelf: 'center'}}>
                  <View
                    style={{
                      position: 'absolute',
                      zIndex: 1,
                      height: style.height / 18,
                      width: style.height / 18,

                      justifyContent: 'center',
                      borderTopLeftRadius: 10,
                      borderBottomLeftRadius: 10,
                      alignItems: 'center',
                    }}>
                    <Icon name="search" color={style.textColor} size={16} />
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
    fontSize: style.fontSize.small,
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
    paddingLeft: 10,
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingLeft: 40,
    width: style.width / 1.5,
  },

  title: {
    fontSize: style.fontSize.xs,
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
