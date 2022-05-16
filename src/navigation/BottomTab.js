import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import {style} from '../theme/style';
import {getHeaderTitle} from '@react-navigation/elements';

const BottomTabBarCustom = ({state, descriptors, navigation}) => {
  return (
    <View
      key={state.index}
      style={{flexDirection: 'row', backgroundColor: '#fff'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };
        const title = getHeaderTitle(options, route.name);

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
          ToastAndroid.show(title, ToastAndroid.SHORT);
        };

        return (
          <TouchableOpacity
            activeOpacity={0.8}
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.button]}>
            <View
              style={{
                height: 3,
                width: 50,
                backgroundColor: isFocused ? style.blue : '#fff',
                alignSelf: 'center',
              }}
            />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 5,
              }}>
              {isFocused ? <route.params.HomeBlue /> : <route.params.Home />}
              <Text
                style={{
                  color: isFocused ? style.blue : style.textColor,
                  fontFamily: style.fontFamilyMedium,
                  fontSize: style.fontSize.xa + 2,
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBarCustom;
const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    maxHeight: 55,
    height: style.height / 8,
  },
});
