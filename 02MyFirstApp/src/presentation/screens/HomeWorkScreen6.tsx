import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {Text} from 'react-native-paper';

export const HomeWorkScreen6 = () => {
  return (
    <View style={style.container}>
      <View style={[style.box, style.purpleBox]} />
      <View style={[style.box, style.orangeBox]} />
      <View style={[style.box, style.blueBox]} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
  },
  box: {
    height: 100,
    width: '100%',
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    flex: 2,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    flex: 2,
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    flex: 4,
  },
});
