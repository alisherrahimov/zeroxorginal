import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {BackGroundIcon} from '../../helper/homeIcon';
import {style} from '../../theme/style';
import BackButton from '../components/BackButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopTabBar from '../../navigation/TopTabBar';
import NotificationCard from '../components/NotificationCard';
import NewsNotificationCard from '../components/NewsNotification';
import {useFetch} from '../../hooks/useFetch';
import {URL} from '../constants';
import Loading from '../components/Loading';
const TopTab = createMaterialTopTabNavigator();
const Notification = () => {
  const {data, error, loading} = useFetch({
    url: URL + '/notification/me',
    method: 'GET',
  });
  if (loading) {
    return <Loading />;
  }
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: style.width, height: style.height}}>
        <View
          style={{
            position: 'absolute',
            height: style.height / 2.5,
            width: '100%',
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
            <TopTab.Navigator tabBar={props => <TopTabBar {...props} />}>
              <TopTab.Screen
                options={{tabBarLabel: 'Bildirishnomalar'}}
                name="Bildrishnoma"
                component={Bildrishnoma}
                initialParams={{data: data.data}}
              />
              <TopTab.Screen
                options={{tabBarLabel: 'Yangiliklar'}}
                name="News"
                component={News}
                initialParams={{data: data.data}}
              />
            </TopTab.Navigator>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const News = () => {
  const route = useRoute();
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {data?.map((item, index) => {
          return <NewsNotificationCard data={data} />;
        })}
      </ScrollView>
    </View>
  );
};
const Bildrishnoma = () => {
  const route = useRoute();
  const {data} = route.params;
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {data?.map((item, index) => {
          return <NotificationCard data={data} />;
        })}
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  pdfView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    backgroundColor: '#fff',
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 20,
  },
  userName: {
    fontSize: style.fontSize.x,
    color: style.textColor,
    fontFamily: style.fontFamilyBold,
    padding: 80,
    alignSelf: 'center',
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
    fontSize: style.fontSize.xx,
    fontFamily: style.fontFamilyMedium,
  },
  main: {
    width: '90%',
    alignSelf: 'center',
    flex: 1,
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
    zIndex: 1,
  },

  title: {
    fontSize: style.fontSize.xs,
    color: style.textColor,
    fontFamily: style.fontFamilyMedium,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
