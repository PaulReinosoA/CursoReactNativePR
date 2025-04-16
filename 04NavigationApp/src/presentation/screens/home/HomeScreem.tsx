import React, {useEffect} from 'react';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {Pressable, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {RootStackParams} from '../../routes/StackNavigator';
import {Text} from 'react-native-gesture-handler';

export const HomeScreem = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  });

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
