import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {View} from 'react-native';
import { globalStyles } from '../../theme/theme';

export const HomeScreem = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products' as never)}
        labelText={'Propductos'}
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        labelText={'Settings'}
      />
    </View>
  );
};
