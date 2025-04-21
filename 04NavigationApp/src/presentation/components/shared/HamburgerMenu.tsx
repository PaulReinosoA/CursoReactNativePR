import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable} from 'react-native';
import {EvilIconVectorIcon} from './EvilIconVectorIcon';
import {globalColors} from '../../theme/theme';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          {/* <Text>Menú</Text> */}
          <EvilIconVectorIcon
            name={'menu-outline'}
            color={globalColors.primary}
            size={32}
          />
        </Pressable>
      ),
    });
  });

  return <></>;
};
