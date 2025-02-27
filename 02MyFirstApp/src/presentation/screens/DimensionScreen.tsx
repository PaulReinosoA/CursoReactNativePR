import React from 'react';
import {StyleSheet, useWindowDimensions, View} from 'react-native';
// import {Dimensions} from 'react-native';
import {Text} from 'react-native-paper';

// const {width: widthWindow, height: heightWindow} = Dimensions.get('window');

export const DimensionScreen = () => {
  const {width: widthWindow, height: heightWindow} = useWindowDimensions(); // es en tiempo real
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: widthWindow * 0.7}} />{/*style={styles.purpleBox} la forma nueva sirve para sobreescribir los estilos!!*/}
      </View>
      <Text style={styles.title}>
        w:{widthWindow}, h:{heightWindow}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    width: 300,
    height: 300,
    backgroundColor: 'red',
  },
  title: {
    fontSize:30,
    textAlign:'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    height: '50%',
    width: '50%',
  },
});
