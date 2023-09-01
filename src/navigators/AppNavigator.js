import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, TouchableOpacity, Text} from 'react-native';

import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';
import {Colors} from '../common';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.WHITE,
        tabBarStyle: {
          backgroundColor: Colors.BLACK,
        },
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="Show" component={HomeNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
};

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={{flexDirection: 'row', backgroundColor: Colors.BLACK}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || route.name;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{flex: 1, alignItems: 'center', paddingVertical: 10}}>
            <Text
              style={{
                color: state.index === index ? Colors.WHITE : Colors.GRAY,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default AppNavigator;
