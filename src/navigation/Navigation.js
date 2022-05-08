import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import EnterScreen from '../screens/other/EnterScreen';
import SelectLanguageScreen from '../screens/auth/SelectLanguageScreen';
import SelectJuridical from '../screens/auth/SelectJuridical';
import LoginWithPhone from '../screens/auth/LoginWithPhone';
import RecoveryPassword from '../screens/auth/RecoveryPassword';
import NewPasswordEnter from '../screens/auth/NewPasswordEnter';
import Register from '../screens/auth/RegisterWithJuridic';
import CheckSmsPassword from '../screens/auth/CheckSmsPassword';
import Agree from '../screens/auth/Agree';
import SetLocalPassword from '../screens/auth/SetLocalPassword';
import CreateSecretWord from '../screens/auth/CreateSecretWord';
import Home from '../screens/home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBarCustom from './BottomTab';
import TakeDebt from '../screens/home/TakeDebt';
import GiveDebt from '../screens/home/GiveDebt';
import Statistic from '../screens/home/Statistic';
import HomeIcon from '../images/tab/HomeIconBlack.svg';
import GiveIcon from '../images/tab/GiveIcon.svg';
import TakeIcon from '../images/tab/TakeDebtIcon.svg';
import StatisticIcon from '../images/tab/StatisticIcon.svg';
import DrawerScreen from '../screens/home/drawer/DrawerScreen';
import AboutUs from '../screens/other/AboutUs';
import QrCode from '../screens/home/drawer/drawerScreens/QrCode';
import ShareDevices from '../screens/home/drawer/drawerScreens/ShareDevices';
import UseTerm from '../screens/home/drawer/drawerScreens/UseTerm';
import AboutMe from '../screens/home/drawer/drawerScreens/AboutMe';
import Support from '../screens/home/drawer/drawerScreens/Support';
import HomeIconBlue from '../images/tab/HomeIconBlue.svg';
import GiveDebtIconBlue from '../images/tab/GiveDebtIconBlue.svg';
import TakeDebtIconBlue from '../images/tab/TakeDebtIconBLue.svg';
import StatisticIconBlue from '../images/tab/StatisticIconBlue.svg';
import SearchDebitor from '../screens/home/statisticScreens/SearchDebitor';
import CreditorDebitor from '../screens/home/statisticScreens/CreditorDebitor';
import DownloadStatistic from '../screens/home/statisticScreens/DownloadStatistic.js';
import UserScreen from '../screens/other/UserScreen';
import RegisterWithPeople from '../screens/auth/RegisterWithPeople';
import CreatePassword from '../screens/auth/CreatePassword';
import ChangeEmail from '../screens/auth/ChangeEmail';
import ChangePhoneNumber from '../screens/auth/ChangePhoneNumber';
import Notification from '../screens/home/Notification';
import DebtLengthen from '../screens/other/DebtLengthen';
import Debitor from '../screens/home/statisticScreens/Debitor';
import UserMoneyResult from '../screens/other/UserMoneyResult';
import PayScreen from '../screens/other/PayScreen';
import SearchUserScreen from '../screens/other/SearchUserScreen';
import HistoryDebt from '../screens/other/HistoryDebt';
import UserInformationOfDebt from '../screens/other/UserInformationOfDebt';
import GiveDebtUser from '../screens/other/GiveDebtUser';
import Test from '../screens/Test';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {style} from '../theme/style';
import SearchJuridicUser from '../screens/other/SearchJuridicUser';

const Stack = createNativeStackNavigator();
const BottomTabStack = createMaterialBottomTabNavigator();
const DrawerStack = createDrawerNavigator();
const allowSomeScreen = ['BottomTabNavigator'];
const DrawerNavigator = () => {
  return (
    <DrawerStack.Navigator
      initialRouteName="StackNavigator"
      screenOptions={{
        swipeEnabled: false,
        headerShown: false,
        drawerType: 'front',
        swipeEdgeWidth: 100,
        drawerStyle: {
          borderRadius: 20,
        },
      }}
      drawerContent={props => <DrawerScreen {...props} />}>
      <DrawerStack.Screen
        name="StackNavigator"
        component={StackNavigator}
        options={({route}) => {
          const routeName =
            getFocusedRouteNameFromRoute(route) ?? 'BottomTabNavigator';
          if (allowSomeScreen.includes(routeName)) {
            return {
              swipeEnabled: true,
            };
          }
        }}
      />
    </DrawerStack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <BottomTabStack.Navigator
      activeColor={style.blue}
      screenOptions={{headerShown: false, tabBarColor: '#fff'}}>
      <BottomTabStack.Screen
        options={{
          title: 'Asosiy',
          tabBarIcon: ({focused}) =>
            focused ? <HomeIconBlue /> : <HomeIcon />,
        }}
        name="Home"
        component={Home}
      />
      <BottomTabStack.Screen
        options={{
          title: 'Qarz olish',
          tabBarIcon: ({focused}) =>
            focused ? <GiveDebtIconBlue /> : <GiveIcon />,
        }}
        name="GiveDebt"
        component={GiveDebt}
      />
      <BottomTabStack.Screen
        options={{
          title: 'Qarz berish',
          tabBarIcon: ({focused}) =>
            focused ? <TakeDebtIconBlue /> : <TakeIcon />,
        }}
        name="TakeDebt"
        component={TakeDebt}
      />

      <BottomTabStack.Screen
        options={{
          title: 'Hisobot',
          tabBarIcon: ({focused}) =>
            focused ? <StatisticIconBlue /> : <StatisticIcon />,
        }}
        name="Statistic"
        component={Statistic}
      />
    </BottomTabStack.Navigator>
  );
};
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="EnterScreen">
      <Stack.Screen name="EnterScreen" component={EnterScreen} />
      <Stack.Screen
        name="SelectLanguageScreen"
        component={SelectLanguageScreen}
      />
      <Stack.Screen name="SelectJuridical" component={SelectJuridical} />
      <Stack.Screen name="LoginWithPhone" component={LoginWithPhone} />
      <Stack.Screen name="RecoveryPassword" component={RecoveryPassword} />
      <Stack.Screen name="NewPasswordEnter" component={NewPasswordEnter} />
      <Stack.Screen name="RegisterWithJuridic" component={Register} />
      <Stack.Screen name="CheckSmsPassword" component={CheckSmsPassword} />
      <Stack.Screen name="Agree" component={Agree} />
      <Stack.Screen name="SetLocalPassword" component={SetLocalPassword} />
      <Stack.Screen name="CreateSecretWord" component={CreateSecretWord} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="QrCode" component={QrCode} />
      <Stack.Screen name="ShareDevices" component={ShareDevices} />
      <Stack.Screen name="UseTerm" component={UseTerm} />
      <Stack.Screen name="AboutMe" component={AboutMe} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="SearchDebitor" component={SearchDebitor} />
      <Stack.Screen name="CreditorDebitor" component={CreditorDebitor} />
      <Stack.Screen name="DownloadStatistic" component={DownloadStatistic} />
      <Stack.Screen name="UserScreen" component={UserScreen} />
      <Stack.Screen name="RegisterWithPeople" component={RegisterWithPeople} />
      <Stack.Screen name="CreatePassword" component={CreatePassword} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
      <Stack.Screen name="ChangePhoneNumber" component={ChangePhoneNumber} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="DebtLengthen" component={DebtLengthen} />
      <Stack.Screen name="Debitor" component={Debitor} />
      <Stack.Screen name="UserMoneyResult" component={UserMoneyResult} />
      <Stack.Screen name="PayScreen" component={PayScreen} />
      <Stack.Screen name="SearchUserScreen" component={SearchUserScreen} />
      <Stack.Screen name="HistoryDebt" component={HistoryDebt} />
      <Stack.Screen name="GiveDebtUser" component={GiveDebtUser} />
      <Stack.Screen
        name="UserInformationOfDebt"
        component={UserInformationOfDebt}
      />
      <Stack.Screen name="SearchJuridicUser" component={SearchJuridicUser} />

      <Stack.Screen name="Test" component={Test} />
    </Stack.Navigator>
  );
};
const Navigation = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};
export default Navigation;
