import React from 'react';
import {globalStyles} from '../../theme/theme';
import {Pressable} from 'react-native';
import {Text} from 'react-native-gesture-handler';

interface Props {
  onPress: () => void;
  labelText: string;
}

export const PrimaryButton = ({onPress, labelText}: Props) => {
  return (
    <Pressable style={globalStyles.primaryButton} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{labelText}</Text>
    </Pressable>
  );
};
