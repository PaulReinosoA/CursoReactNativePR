import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

//* La posicion simpre va a ser relativa is no especifico absoluta!
//* esto lo orden en columna uno bajo otro!
//* relativa: hojos siempre relativo al padre!
//* absoluta:no considera empujar al siguienet elemento! -> se "sobrepone"
//* NO RELTIVO A LA PANTALLA SINO AL PADRE!
//! por orden de escritura uno va encima de otro

export const PositionScreen = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.purpleBox} />
        <View style={styles.orangeBox} />
      </View>
      <Text>Absoluto!</Text>
      <Text>Absoluto!</Text>
      <View style={stylesB.container}>
        <View style={stylesB.greeBox} />
        <View style={stylesB.purpleBox} />
        <View style={stylesB.orangeBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    margin: 5,
    backgroundColor: '#28C4D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'relative',
    right: 90,
    top: -60,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    left: 80,
    top: 60,
  },
});

const stylesB = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28C4D9',
    top: 30,
    width: 250,
    height: 300,
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
    //position: 'absolute',
    // top: -50,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    right: 0,
    position: 'absolute',
  },
  greeBox: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
    // right: 0,
    // bottom: 0,
    // left:0,
    // top:0,
    ...StyleSheet.absoluteFillObject,//* HACE O MISMO QUE LAS LINEAS COMENTADAS!
  },
});
