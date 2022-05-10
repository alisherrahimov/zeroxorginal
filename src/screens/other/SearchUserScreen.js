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
import DateTimePicker from '@react-native-community/datetimepicker';
const SearchUserScreen = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            width: style.width,
            position: 'absolute',
            height: style.height / 3,
          }}>
          <BackGroundIcon width="100%" height="100%" />
        </View>
        <View style={styles.main}>
          <View style={{marginTop: Platform.OS === 'android' ? 40 : null}}>
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
                <Text style={styles.title}>Qidiruv</Text>
              </View>
              <View style={{alignSelf: 'center'}}>
                <View style={styles.TextInputLabelContainer}>
                  <View style={styles.inputTitle}>
                    <Text style={styles.phoneText}>ID raqamini kiriting</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <TextInput
                      placeholder="AA000000"
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
                      date={new Date()}
                      mode={'date'}
                      display="spinner"
                      locale="UZ"
                      maximumDate={new Date()}
                      onTouchCancel={() => setOpen(false)}
                      onChange={(event, selectedDate) => {
                        setOpen(false);
                        setDate(selectedDate);
                      }}
                      placeholderText={style.placeHolderColor}
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
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.registerButton}>
                  <Text style={styles.textButton}>Izlash</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <UserInfo />
      </ScrollView>
    </View>
  );
};

const UserInfo = () => {
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
                <Text style={styles.phoneText}>FISH :</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  value="Shavkatov Shahzod Alisherovich"
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
                  value="13.07.2022"
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
                  value="00001AA"
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
