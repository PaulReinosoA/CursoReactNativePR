import React from 'react';
import {StyleSheet, View} from 'react-native';
// import {Text} from 'react-native-paper';

export const HomeWorkScreen3 = () => {
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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  box: {
    height: 100,
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    alignSelf: 'flex-end',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    alignSelf: 'flex-start',
  },
  blueBox: {
    backgroundColor: '#28C4D9',
  },
});
