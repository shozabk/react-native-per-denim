import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Routes} from '../common';
import {DetailScreen, HomeScreen} from '../screens/App';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={Routes.DetailScreen} component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
