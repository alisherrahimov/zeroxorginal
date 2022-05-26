import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackGroundIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import BackButton from '../components/BackButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import EdiUserIcon from '../../images/auth/edituser.svg';
const UserScreen = () => {
  const route = useRoute();
  const {user} = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          height: style.height / 2.5,
          position: 'absolute',
          width: style.width,
        }}>
        <BackGroundIcon width="100%" height="100%" />
      </View>
      <View
        style={{
          marginTop: Platform.OS === 'android' ? 40 : null,
          zIndex: 1,
          marginLeft: '5%',
          position: 'absolute',
        }}>
        <BackButton
          navigation={navigation}
          backgroundColor={'#FFF'}
          IconColor={style.blue}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.main}>
            <View style={styles.aboutUsContainer}>
              <View>
                <Text style={styles.title}>Shahsiy kabinet</Text>
              </View>
              <View style={styles.userImageContainer}>
                <Image
                  style={styles.userImage}
                  source={{
                    uri: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
                  }}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.TextInputLabelContainer}>
                <View style={styles.inputTitle}>
                  <Text style={styles.phoneText}>FISH :</Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInput
                    editable={false}
                    value={
                      user.last_name +
                      ' ' +
                      user.first_name +
                      ' ' +
                      user.middle_name
                    }
                    textAlign="left"
                    multiline={true}
                    keyboardType="default"
                    style={styles.TextInput}
                  />
                </View>
              </View>
              <View style={styles.TextInputLabelContainer}>
                <View style={styles.inputTitle}>
                  <Text style={styles.phoneText}>Tug`ilgan sana:</Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInput
                    editable={false}
                    value={user.birthday}
                    keyboardType="default"
                    style={styles.TextInput}
                  />
                </View>
              </View>
              <View style={styles.TextInputLabelContainer}>
                <View style={styles.inputTitle}>
                  <Text style={styles.phoneText}>
                    Ro`yxatdan o`tgan joyi (propiska):
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInput
                    multiline={true}
                    editable={false}
                    value="Urganch sh. Istiqlol pr4 2-uy"
                    keyboardType="default"
                    style={styles.TextInput}
                  />
                </View>
              </View>
              <View style={styles.TextInputLabelContainer}>
                <View style={styles.inputTitle}>
                  <Text style={styles.phoneText}>Telefon raqami:</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <View
                    style={{
                      position: 'absolute',
                      alignSelf: 'flex-end',
                      zIndex: 1,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('RegisterWithPeople', {type: 0});
                      }}
                      style={{marginRight: 10}}
                      activeOpacity={0.8}>
                      <EdiUserIcon width={30} height={30} />
                    </TouchableOpacity>
                  </View>
                  <TextInput
                    editable={false}
                    value={user.phone}
                    keyboardType="default"
                    style={styles.TextInput}
                  />
                </View>
              </View>
              <View style={styles.TextInputLabelContainer}>
                <View style={styles.inputTitle}>
                  <Text style={styles.phoneText}>Elektron pochta manzili:</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <View
                    style={{
                      position: 'absolute',
                      alignSelf: 'flex-end',
                      zIndex: 1,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ChangeEmail');
                      }}
                      style={{marginRight: 10}}
                      activeOpacity={0.8}>
                      <EdiUserIcon width={30} height={30} />
                    </TouchableOpacity>
                  </View>
                  <TextInput
                    editable={false}
                    value={user?.email}
                    keyboardType="default"
                    style={styles.TextInput}
                  />
                </View>
              </View>
              <View style={styles.TextInputLabelContainer}>
                <View style={styles.inputTitle}>
                  <Text style={styles.phoneText}>ID raqami:</Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInput
                    value={`${user.uid}`}
                    editable={false}
                    placeholderTextColor={style.placeHolderColor}
                    style={styles.TextInput}
                  />
                </View>
              </View>
              <View style={styles.TextInputLabelContainer}>
                <View style={styles.inputTitle}>
                  <Text style={styles.phoneText}>Status</Text>
                </View>
                <View style={{flex: 1}}>
                  <TextInput
                    editable={false}
                    value={user?.status}
                    style={styles.TextInput}
                  />
                </View>
              </View>
              <View
                style={{
                  alignSelf: 'center',
                  flex: 1,
                  width: '90%',
                }}>
                <View style={{marginTop: 20, flex: 1}}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.languageButton}>
                    <Text style={styles.selectLanguageText}>
                      Universal shartnoma
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: 20}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('ChangePassword');
                    }}
                    activeOpacity={0.8}
                    style={styles.languageButton}>
                    <Text style={styles.selectLanguageText}>
                      Parolni o'zgartirish
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },
  selectLanguageText: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: '#fff',
  },
  languageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: style.blue,
    borderRadius: 10,
    padding: 20,
    width: '100%',
  },
  inputTitle: {
    position: 'absolute',
    marginLeft: 15,
    flex: 1,
    zIndex: 1,
    top: -10,
    backgroundColor: '#EAF2FB',
    paddingLeft: 5,
    paddingRight: 5,
  },
  TextInput: {
    width: '100%',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 10,
    fontSize: style.fontSize.small,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
  TextInputLabelContainer: {
    borderColor: style.textColor,
    borderWidth: 0.5,
    borderRadius: 6,
    width: '90%',
    flexDirection: 'row',
    marginTop: 30,
    alignSelf: 'center',
  },
  phoneText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
    color: style.textColor,
  },
  userImage: {
    width: style.width / 3,
    height: style.width / 3,
    borderRadius: style.width / 6,
  },
  userImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },

  download: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: style.StatusbarColor,
    padding: 10,
    width: style.width / 3,
    flexDirection: 'row',
  },
  downloadText: {
    color: '#fff',
    fontSize: style.fontSize.small,
    fontFamily: style.fontFamilyMedium,
  },
  main: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  aboutUsContainer: {
    backgroundColor: '#EAF2FB',
    marginTop: style.height / 8,
    borderRadius: 15,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 10,
    paddingBottom: 20,
  },

  title: {
    fontSize: style.fontSize.xs,
    color: style.textColor,
    fontFamily: style.fontFamilyBold,
    alignSelf: 'center',
  },
});
