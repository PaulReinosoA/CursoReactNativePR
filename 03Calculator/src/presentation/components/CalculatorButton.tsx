import React from 'react';
import {Pressable, Text} from 'react-native';
import {colors, stylesGlobal} from '../../config/theme/AppTheme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      // style={({pressed}) => {
      //     return {
      //       ...stylesGlobal.button,
      //       backgroundColor: color,
      //       opacity: pressed ? 0.8 : 1,
      //     };
      //   }}
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...stylesGlobal.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text
        style={{
          ...stylesGlobal.buttonText,
          color: blackText ? 'black' : 'white',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
