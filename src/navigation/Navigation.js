import React from 'react';
import {
  getFocusedRouteNameFromRoute,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  SelectLanguageScreen,
  AboutMe,
  AboutUs,
  Agree,
  BottomTabBarCustom,
  ChangeEmail,
  ChangePassword,
  ChangePasswordRetry,
  ChangePhoneNumber,
  CharityDebt,
  CharityDebtPart,
  CharityDebtTasdiqlash,
  CheckSmsPassword,
  CreatePassword,
  CreateSecretWord,
  CreditorDebitor,
  Debitor,
  DebtDateLength,
  DebtDateLengthAsk,
  DebtLengthen,
  DebtTakeFull,
  DebtTakePart,
  DebtTakeSelect,
  DownloadStatistic,
  DrawerScreen,
  FingerScanner,
  FullDebtBack,
  FullDebtSelect,
  GiveDebt,
  GiveDebtIconBlue,
  GiveDebtUser,
  GiveIcon,
  HistoryDebt,
  Home,
  HomeIcon,
  HomeIconBlue,
  Indentifikatsiya,
  LoginWithPhone,
  NewPasswordEnter,
  Notification,
  PartDebtBack,
  PayScreen,
  QrCode,
  RecoveryPassword,
  Register,
  RegisterWithPeople,
  SearchDebitor,
  SearchJuridicUser,
  SearchUserScreen,
  SelectJuridical,
  SendMoney,
  SetLocalPassword,
  ShareDevices,
  Statistic,
  StatisticIcon,
  StatisticIconBlue,
  Support,
  TakeDebt,
  TakeDebtIconBlue,
  TakeIcon,
  Test,
  UseTerm,
  UserInformationOfDebt,
  UserMoneyResult,
  UserScreen,
  MuddatOzQolgan,
} from './Index';

import PdfView from '../screens/home/statisticScreens/PdfView';
import {style} from '../theme/style';
import TestTextInput from '../screens/TestTextInput';

const Stack = createNativeStackNavigator();
const BottomTabStack = createMaterialTopTabNavigator();
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
        swipeEdgeWidth: 30,

        drawerAllowFontScaling: true,
        drawerStyle: {
          borderRadius: 20,
          width: style.width / 1.2,
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
      tabBarPosition="bottom"
      tabBar={props => <BottomTabBarCustom {...props} />}
      screenOptions={{headerShown: false, tabBarColor: '#fff'}}>
      <BottomTabStack.Screen
        key={'Home'}
        options={{
          title: 'Asosiy',
        }}
        name="Home"
        component={Home}
        initialParams={{
          Home: () => <HomeIcon />,
          HomeBlue: () => <HomeIconBlue />,
        }}
      />
      <BottomTabStack.Screen
        key={'GiveDebt'}
        options={{
          title: 'Qarz olish',
        }}
        name="GiveDebt"
        component={GiveDebt}
        initialParams={{
          Home: () => <GiveIcon />,
          HomeBlue: () => <GiveDebtIconBlue />,
        }}
      />
      <BottomTabStack.Screen
        key={'TakeDebt'}
        options={{
          title: 'Qarz berish',
        }}
        name="TakeDebt"
        component={TakeDebt}
        initialParams={{
          Home: () => <TakeIcon />,
          HomeBlue: () => <TakeDebtIconBlue />,
        }}
      />

      <BottomTabStack.Screen
        key={'Statistic'}
        options={{
          title: 'Hisobot',
        }}
        name="Statistic"
        component={Statistic}
        initialParams={{
          Home: () => <StatisticIcon />,
          HomeBlue: () => <StatisticIconBlue />,
        }}
      />
    </BottomTabStack.Navigator>
  );
};
const AllNavigators = [
  {name: 'SelectLanguageScreen', component: SelectLanguageScreen},
  {name: 'SelectJuridical', component: SelectJuridical},
  {name: 'LoginWithPhone', component: LoginWithPhone},
  {name: 'RecoveryPassword', component: RecoveryPassword},
  {name: 'NewPasswordEnter', component: NewPasswordEnter},
  {name: 'RegisterWithJuridic', component: Register},
  {name: 'CheckSmsPassword', component: CheckSmsPassword},
  {name: 'Agree', component: Agree},
  {name: 'SetLocalPassword', component: SetLocalPassword},
  {name: 'CreateSecretWord', component: CreateSecretWord},
  {name: 'BottomTabNavigator', component: BottomTabNavigator},
  {name: 'AboutUs', component: AboutUs},
  {name: 'QrCode', component: QrCode},
  {name: 'ShareDevices', component: ShareDevices},
  {name: 'AboutMe', component: AboutMe},
  {name: 'Support', component: Support},
  {name: 'SearchDebitor', component: SearchDebitor},
  {name: 'CreditorDebitor', component: CreditorDebitor},
  {name: 'DownloadStatistic', component: DownloadStatistic},
  {name: 'UserScreen', component: UserScreen},
  {name: 'RegisterWithPeople', component: RegisterWithPeople},
  {name: 'CreatePassword', component: CreatePassword},
  {name: 'ChangeEmail', component: ChangeEmail},
  {name: 'ChangePhoneNumber', component: ChangePhoneNumber},
  {name: 'Notification', component: Notification},
  {name: 'DebtLengthen', component: DebtLengthen},
  {name: 'Debitor', component: Debitor},
  {name: 'UserMoneyResult', component: UserMoneyResult},
  {name: 'PayScreen', component: PayScreen},
  {name: 'SearchUserScreen', component: SearchUserScreen},
  {name: 'HistoryDebt', component: HistoryDebt},
  {name: 'GiveDebtUser', component: GiveDebtUser},
  {name: 'UserInformationOfDebt', component: UserInformationOfDebt},
  {name: 'SearchJuridicUser', component: SearchJuridicUser},
  {name: 'SendMoney', component: SendMoney},
  {name: 'DebtDateLength', component: DebtDateLength},
  {name: 'DebtDateLengthAsk', component: DebtDateLengthAsk},
  {name: 'FullDebtSelect', component: FullDebtSelect},
  {name: 'FullDebtBack', component: FullDebtBack},
  {name: 'PartDebtBack', component: PartDebtBack},
  {name: 'ChangePassword', component: ChangePassword},
  {name: 'CharityDebt', component: CharityDebt},
  {name: 'CharityDebtPart', component: CharityDebtPart},
  {name: 'DebtTakeSelect', component: DebtTakeSelect},
  {name: 'DebtTakeFull', component: DebtTakeFull},
  {name: 'DebtTakePart', component: DebtTakePart},
  {name: 'Indentifikatsiya', component: Indentifikatsiya},
  {name: 'FingerScanner', component: FingerScanner},
  {name: 'CharityDebtTasdiqlash', component: CharityDebtTasdiqlash},
  {name: 'ChangePasswordRetry', component: ChangePasswordRetry},
  {name: 'Test', component: Test},
  {name: 'UseTerm', component: UseTerm},
  {name: 'PdfView', component: PdfView},
  {name: 'MuddatOzQolgan', component: MuddatOzQolgan},
  {name: 'TestTextInput', component: TestTextInput},
];
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'SelectLanguageScreen'}>
      {AllNavigators.map((val, index) => {
        return (
          <Stack.Screen name={val.name} component={val.component} key={index} />
        );
      })}
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
