import {StackActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const SettingsScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10}}>Settings Screen</Text>
      <PrimaryButton labelText="Regresar" onPress={() => navigator.goBack()} />
      <PrimaryButton labelText="Regresar a Home" onPress={() => navigator.dispatch(StackActions.popToTop())} />
    </View>
  );
};
