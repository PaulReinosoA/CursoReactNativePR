import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './presentation/navigations/Navigation';

export const App = () => {
  return (
    <View>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </View>
  );
};
