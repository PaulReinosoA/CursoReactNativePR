import {StyleSheet, View} from 'react-native';
// import {Text} from 'react-native-paper';

export const FlexDirectionScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.box, style.boxUno]} />
      <View style={[style.box, style.boxDos]} />
      <View style={[style.box, style.boxTres]} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    //* alineado abajo derecha
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    // flexDirection: 'row',

    //* alineado en el centro derecha
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // flexDirection: 'row',

    //* alineado en el centro izquierda
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    // flexDirection: 'row',

    //* alineado en el centro espaceado
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box: {
    height: 100,
    width: 100,
  },
  boxUno: {
    backgroundColor: '#5856D6',
  },
  boxDos: {
    backgroundColor: '#4240a2',
  },
  boxTres: {
    backgroundColor: '#2e2d71',
  },
});
