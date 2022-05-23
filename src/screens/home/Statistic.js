import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackGroundIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';

const Statistic = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          position: 'absolute',
          height: style.height / 2.5,
          width: '100%',
        }}>
        <BackGroundIcon width="100%" height="100%" />
      </View>
      <View style={styles.header}>
        <Header />
        <View style={styles.aboutUsContainer}>
          <View style={{marginTop: 20, marginBottom: 20}}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('SearchDebitor', {
                  title: 'Hisobot (debitor)',
                  type: 1,
                });
              }}
              style={styles.enterButton}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Hisobot (debitor)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('SearchDebitor', {
                  title: 'Hisobot (kreditor)',
                  type: 1,
                });
              }}
              style={[styles.enterButton, {marginTop: 20}]}>
              <Text style={[styles.enterText, {color: '#fff'}]}>
                Hisobot (kreditor)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Statistic;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.backgroundColor,
  },
  aboutUsContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
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
  },
  header: {
    flex: 1,
    position: 'absolute',
    width: '90%',
    alignSelf: 'center',
  },
  userNameText: {
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
    color: '#fff',
  },
  DrawerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  enterButton: {
    width: '85%',
    backgroundColor: style.blue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    height: style.textInputHeight,
    alignSelf: 'center',
  },
  drawer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  AlarmContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ImageButton: {
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  enterText: {
    fontFamily: style.fontFamilyMedium,
    fontSize: style.fontSize.xx,
    color: style.textColor,
    padding: 5,
  },

  title: {
    fontSize: style.fontSize.xs,
    color: style.textColor,
    fontFamily: style.fontFamilyBold,
    alignSelf: 'center',
  },
});
