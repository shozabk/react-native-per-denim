import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Routes} from '../common';
import {ProfileScreen} from '../screens/App';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.ProfileScreen} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
