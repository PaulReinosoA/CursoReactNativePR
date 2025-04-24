import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';

export const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
};
