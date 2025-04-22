import React from 'react';
import {ButtonTabNavigator} from './presentation/navigators/ButtonTabNavigator';
import {NavigationContainer} from '@react-navigation/native';

export const Main = () => {
  return (
    <NavigationContainer>
      <ButtonTabNavigator />
    </NavigationContainer>
  );
};
