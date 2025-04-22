import React from 'react';
import {Text, View} from 'react-native';
import {ButtonTabNavigator} from './presentation/navigators/ButtonTabNavigator';

export const Main = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Main</Text>
      <ButtonTabNavigator />
    </View>
  );
};
