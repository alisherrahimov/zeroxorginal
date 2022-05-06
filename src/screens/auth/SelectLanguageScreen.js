import {
  BackHandler,
  DeviceEventEmitter,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import Person from '../../images/boysee.svg';
import {style} from '../../theme/style';
import {OpenFaceIdNativeScreen} from '../../nativemodule/android.event';
import Uzbekistan from '../../images/uzbekistaan.svg';
import Russia from '../../images/russia.svg';
import {URL} from '../constants';
import axios from 'axios';
const SelectLanguageScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.logoContainer}>
        <Person width="50%" height="50%" />
      </View>

      <View style={styles.languageContainer}>
        <Text style={styles.selectLanguageText}>Ilovani tilini tanlang</Text>
        <View style={styles.languageButtonContainer}>
          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.8}
            style={styles.languageButton}>
            <View style={styles.Flag}>
              <Russia width="40%" height="100%" />
              <Text style={styles.languageText}>Рус</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectJuridical');
            }}
            activeOpacity={0.8}
            style={styles.languageButton}>
            <View style={styles.Flag}>
              <Uzbekistan width="40%" height="100%" />
              <Text style={styles.languageText}>Узб</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.languageButton}>
            <View style={styles.Flag}>
              <Uzbekistan width="40%" height="100%" />
              <Text style={styles.languageText}>O’z</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectLanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  languageText: {
    fontSize: style.fontSize.s,
    fontFamily: style.fontFamilyRegular,
    color: '#fff',
    marginLeft: 3,
  },
  Flag: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    width: '90%',
  },
  languageButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: style.blue,
    borderRadius: 10,
    padding: 20,
    width: style.width / 4,
    height: style.buttonHeight,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  languageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackButton: {
    position: 'absolute',
    marginLeft: 15,
    marginTop: 15,
  },
  selectLanguageText: {
    fontSize: style.fontSize.s,
    fontFamily: style.fontFamilyBold,
    color: style.textColor,
  },
});
