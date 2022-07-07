import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {BackGroundIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import BackButton from '../components/BackButton';
import {useNavigation} from '@react-navigation/native';
import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';
import {UserSearch} from '../../store/api/user';
import Loading from '../components/Loading';
import Toast from 'react-native-toast-message';
import {toastConfig} from '../components/ToastConfig';
import {defaultValue} from '../../store/reducers/UserSearchReducer';
import {useFetch} from '../../hooks/useFetch';
import {URL} from '../constants';
import axios from 'axios';
import TextInputMask from 'react-native-text-input-mask';
const SearchUserScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [userID, setUserID] = useState('');
  const SearchUser = async () => {
    const day = date.getDate().toString();
    const month = Number(date.getMonth().toString()) + 1;
    const year = date.getFullYear().toString();
    const userDate = `${day}.${month}.${year}`;
    try {
      setLoading(true);
      setError(false);
      const {data, status} = await axios.post(URL + '/user/search', {
        id: userID,
        birthday: userDate,
        type: 1,
      });
      if (status == 200) {
        setData(data);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: style.width,
          position: 'absolute',
          height: style.height / 3,
        }}>
        <BackGroundIcon width="100%" height="100%" />
      </View>
      <View
        style={{
          marginTop: Platform.OS === 'android' ? 40 : null,
          position: 'absolute',
          marginLeft: 15,
          zIndex: 1,
        }}>
        <BackButton
          navigation={navigation}
          backgroundColor={'#fff'}
          IconColor={style.blue}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: style.height / 8}}>
          <View style={styles.main}>
            <View style={styles.aboutUsContainer}>
              <View
                style={{
                  width: '100%',
                  alignSelf: 'center',
                  marginVertical: 20,
                }}>
                <View style={{alignSelf: 'center'}}>
                  <Text style={styles.title}>Qidiruv</Text>
                </View>
                <View style={{alignSelf: 'center'}}>
                  <View style={styles.TextInputLabelContainer}>
                    <View style={styles.inputTitle}>
                      <Text style={styles.phoneText}>ID raqamini kiriting</Text>
                    </View>
                    <View style={{flex: 1}}>
                      <TextInputMask
                        value={userID}
                        placeholder="1000005/AA"
                        onChangeText={(formatted, text) => {
                          setUserID(text);
                        }}
                        mask="[000000]{/}[AA]"
                        placeholderTextColor={style.placeHolderColor}
                        keyboardType="default"
                        style={[styles.TextInput, {paddingLeft: 15}]}
                      />
                    </View>
                  </View>
                  <View style={styles.TextInputLabelContainer}>
                    <View style={styles.inputTitle}>
                      <Text style={styles.phoneText}>
                        Tug`ilgan sanani kiriting
                      </Text>
                    </View>
                    {open && (
                      <DateTimePicker
                        value={date}
                        accentColor={style.blue}
                        locale="uz"
                        textColor={style.textColor}
                        style={{backgroundColor: 'red'}}
                        date={date}
                        dateFormat="day month year"
                        display="spinner"
                        mode={'datetime'}
                        onChange={(event, selectedDate) => {
                          const currentDate = selectedDate;
                          setOpen(!open);
                          setDate(currentDate);
                        }}
                        onTouchCancel={() => setOpen(!open)}
                        maximumDate={new Date()}
                      />
                    )}
                    <View style={{flex: 1}}>
                      <TouchableOpacity
                        onPress={() => {
                          setOpen(!open);
                        }}
                        style={[styles.TextInput, {paddingLeft: 15}]}>
                        <Text style={styles.phoneText}>
                          {date.getDate() +
                            '/' +
                            (date.getMonth() + 1) +
                            '/' +
                            date.getFullYear()}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {error && (
                  <Text
                    style={{
                      color: 'red',
                      fontFamily: style.fontFamilyMedium,
                      fontSize: style.fontSize.small,
                      alignSelf: 'center',
                      marginTop: 8,
                    }}>
                    Bunday foydalanuvchi topilmadi!
                  </Text>
                )}
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                  }}>
                  <TouchableOpacity
                    onPress={SearchUser}
                    activeOpacity={0.8}
                    style={styles.registerButton}>
                    <Text style={styles.textButton}>Izlash</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          {error == false && loading == false && data?.success && (
            <UserInfo user={data?.user} navigation={navigation} />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const UserInfo = ({user, navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.aboutUsContainer}>
        <View
          style={{
            flex: 1,
            width: '90%',
            alignSelf: 'center',
            marginVertical: 20,
          }}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('UserInformationOfDebt');
              }}
              activeOpacity={0.8}
              style={styles.getUserInfoButton}>
              <Text
                style={[styles.textButton, {fontSize: style.fontSize.small}]}>
                Ma’lumotlarni ko’rish
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={[styles.TextInputLabelContainer, {width: '100%'}]}>
              <View style={styles.inputTitle}>
                <Text style={styles.phoneText}>FISH : </Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value={
                    `${user?.last_name} ${user?.first_name} ${user?.middle_name}` ||
                    null
                  }
                  placeholderTextColor={style.placeHolderColor}
                  editable={false}
                  keyboardType="default"
                  style={[styles.TextInput, {paddingLeft: 15}]}
                />
              </View>
            </View>
            <View style={[styles.TextInputLabelContainer, {width: '100%'}]}>
              <View style={styles.inputTitle}>
                <Text style={styles.phoneText}>Ro`yxatdan o`tgan:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  editable={false}
                  placeholderTextColor={style.placeHolderColor}
                  value={user?.createdAt.slice(0, 10)}
                  keyboardType="default"
                  style={[styles.TextInput, {paddingLeft: 15}]}
                />
              </View>
            </View>
            <View style={[styles.TextInputLabelContainer, {width: '100%'}]}>
              <View style={styles.inputTitle}>
                <Text style={styles.phoneText}>ID raqami:</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  placeholderTextColor={style.placeHolderColor}
                  value={user?.uid}
                  editable={false}
                  keyboardType="default"
                  style={[styles.TextInput, {paddingLeft: 15}]}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchUserScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },

  textButton: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: '#fff',
    textAlign: 'center',
  },
  registerButton: {
    width: '90%',
    height: style.buttonHeight,
    backgroundColor: style.blue,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    width: '100%',
    height: style.textInputHeight,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 5,
    justifyContent: 'center',
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
  inputTitle: {
    position: 'absolute',
    marginLeft: 15,
    flex: 1,
    zIndex: 1,
    top: -10,
    backgroundColor: '#fff',
    paddingLeft: 5,
    paddingRight: 5,
  },
  getUserInfoButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: style.blue,
    width: style.width / 3,
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  phoneText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
    color: style.textColor,
  },
  TextInputLabelContainer: {
    borderColor: style.textColor,
    borderWidth: 0.5,
    borderRadius: 6,
    width: '90%',
    flexDirection: 'row',
    marginTop: 30,
  },
  title: {
    fontSize: style.fontSize.xs,
    fontFamily: style.fontFamilyBold,
    color: style.textColor,
  },

  main: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
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
    marginBottom: 10,
  },
});
