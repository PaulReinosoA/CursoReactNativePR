import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {Text} from 'react-native-paper';

export const FlexScreen = () => {
  return (
    <View style={style.container}>
      <View style={style.boxUno} />
      <View style={style.boxDos} />
      <View style={style.boxTres} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  boxUno: {
    flex: 1,
    backgroundColor: '#5856D6',
  },
  boxDos: {
    flex: 2,
    backgroundColor: '#4240a2',
  },
  boxTres: {
    flex: 3,
    backgroundColor: '#2e2d71',
  },
});
