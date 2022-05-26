import {
  Image,
  Platform,
  Pressable,
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
import {useNavigation} from '@react-navigation/native';
import {Checkbox, RadioButton} from 'react-native-paper';
import {Picker as SelectPicker} from '@react-native-picker/picker';
const GiveDebtUser = () => {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = React.useState();
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
          <View
            style={{
              marginTop: Platform.OS === 'android' ? 40 : null,
            }}>
            <BackButton
              navigation={navigation}
              backgroundColor={'#fff'}
              IconColor={style.blue}
            />
          </View>
          <View style={styles.aboutUsContainer}>
            <View style={{width: '100%', alignSelf: 'center'}}>
              <View style={{alignSelf: 'center'}}>
                <Text style={styles.title}>Qarz berish</Text>
              </View>
            </View>
            <View style={{marginTop: 20}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 15,
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode={'cover'}
                  source={{
                    uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  style={styles.userImage}
                />
                <View style={{marginLeft: 5}}>
                  <Text style={styles.titleGiveDebt}>Qarz oluvchi :</Text>
                  <Text style={styles.username}>
                    Shavkatov Shahzod Alisherovich
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 15,
                  marginTop: 15,
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode={'cover'}
                  source={{
                    uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  style={styles.userImage}
                />
                <View style={{marginLeft: 5}}>
                  <Text
                    style={[styles.titleGiveDebt, {color: style.MoneyColor}]}>
                    Qarz beruvchi :
                  </Text>
                  <Text style={styles.username}>
                    Shavkatov Shahzod Alisherovich
                  </Text>
                </View>
              </View>
            </View>
            <View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignSelf: 'center',
                  width: '60%',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <Pressable
                  android_ripple={{
                    borderless: true,
                    color: style.blue,
                    radius: 25,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        color: style.textColor,
                        fontSize: style.fontSize.small,
                        fontFamily: style.fontFamilyMedium,
                      }}>
                      UZS
                    </Text>
                    <RadioButton
                      value="first"
                      color={style.blue}
                      status="checked"
                    />
                  </View>
                </Pressable>
                <Pressable
                  android_ripple={{
                    borderless: true,
                    color: style.blue,
                    radius: 25,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        color: style.textColor,
                        fontSize: style.fontSize.small,
                        fontFamily: style.fontFamilyMedium,
                      }}>
                      USD
                    </Text>
                    <RadioButton
                      value="second"
                      color={style.blue}
                      status="unchecked"
                    />
                  </View>
                </Pressable>
              </View>

              {/* <View style={styles.TextInputLabelContainer}>
                <View style={styles.inputTitle}>
                  <Text style={styles.phoneText}>Valyutani tanlang</Text>
                </View>

                <View style={{flex: 1}}>
                  <SelectPicker
                    dropdownIconColor={style.textColor}
                    itemStyle={{
                      fontFamily: style.fontFamilyMedium,
                      fontSize: style.fontSize.small,
                      color: style.textColor,
                    }}
                    mode="dialog"
                    selectedValue={isChecked}
                    onValueChange={(itemValue, itemIndex) =>
                      setIsChecked(itemValue)
                    }>
                    <SelectPicker.Item
                      label="Dollar"
                      value="Dollar"
                      style={{
                        fontSize: style.fontSize.xx,
                        color: style.textColor,
                        fontFamily: style.fontFamilyMedium,
                      }}
                    />
                    <SelectPicker.Item
                      label="So'm"
                      value="So'm"
                      style={{
                        fontSize: style.fontSize.xx,
                        color: style.textColor,
                        fontFamily: style.fontFamilyMedium,
                      }}
                    />
                  </SelectPicker>
                </View>
              </View> */}

              <View style={styles.TextInputLabelContainer}>
                <View style={styles.inputTitle}>
                  <Text style={styles.phoneText}>Summani kiriting</Text>
                </View>

                <View style={{flex: 1}}>
                  <TextInput
                    placeholder="100 000 so'm"
                    placeholderTextColor={style.placeHolderColor}
                    keyboardType="number-pad"
                    style={styles.TextInput}
                  />
                </View>
              </View>
              <View style={styles.TextInputLabelContainer}>
                <View style={styles.inputTitle}>
                  <Text style={styles.phoneText}>Muddatni belgilang</Text>
                </View>

                <View style={{flex: 1}}>
                  <TouchableOpacity style={styles.buttontime}>
                    <Text
                      style={{
                        fontFamily: style.fontFamilyMedium,
                        color: style.textColor,
                        fontSize: style.fontSize.xx,
                      }}>
                      22/11/1997
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Checkbox status="checked" color={style.blue} />
                <Text style={styles.phoneText}>
                  Qarz shartnomasi bilan tanishdim
                </Text>
              </View>
              <View>
                <TouchableOpacity style={styles.button}>
                  <Text style={[styles.time, {color: '#fff'}]}>Tasdiqlash</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GiveDebtUser;

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1,
  },
  button: {
    width: '85%',
    backgroundColor: style.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    height: style.textInputHeight,
    alignSelf: 'center',
  },
  username: {
    fontSize: style.fontSize.small,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
  },
  titleGiveDebt: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: 'red',
  },
  timeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  cardViewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  userImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  userImage: {
    width: style.width / 6,
    height: style.width / 6,
    borderRadius: style.width / 6,
  },
  time: {
    fontSize: style.fontSize.xs,
    fontFamily: style.fontFamilyMedium,
    color: style.textColor,
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
    paddingVertical: 20,
  },
  TextInput: {
    width: '100%',
    height: style.textInputHeight,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 10,
    justifyContent: 'center',
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xx,
    color: style.textColor,
  },
  buttontime: {
    width: '100%',
    height: style.textInputHeight,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  TextInputLabelContainer: {
    borderColor: style.textColor,
    borderWidth: 0.5,
    borderRadius: 6,
    width: '90%',
    flexDirection: 'row',
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: '#EAF2FB',
  },
  phoneText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.small,
    color: style.textColor,
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
  containerrr: {
    flex: 1,
    width: style.width / 2.4,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 10,
  },
  sum: {
    fontSize: style.fontSize.small,
    fontFamily: style.fontFamilyMedium,
    color: style.MoneyColor,
  },
  title: {
    fontSize: style.fontSize.xs,
    fontFamily: style.fontFamilyBold,
    color: style.textColor,
  },
});
