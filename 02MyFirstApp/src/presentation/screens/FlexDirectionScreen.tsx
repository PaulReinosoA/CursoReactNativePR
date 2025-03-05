import {StyleSheet, View} from 'react-native';
// import {Text} from 'react-native-paper';

export const FlexDirectionScreen = () => {
  return (
    <View style={style.container}>
      <View style={[style.box, style.boxUno]} />
      <View style={[style.box, style.boxDos]} />
      <View style={[style.box, style.boxTres]} />
      <View style={[style.box, style.boxCuatro]} />

      <View style={[style.box, style.boxUno]} />
      <View style={[style.box, style.boxDos]} />
      <View style={[style.box, style.boxTres]} />
      <View style={[style.box, style.boxCuatro]} />

      <View style={[style.box, style.boxUno]} />
      <View style={[style.box, style.boxDos]} />
      <View style={[style.box, style.boxTres]} />
      <View style={[style.box, style.boxCuatro]} />

      <View style={[style.box, style.boxUno]} />
      <View style={[style.box, style.boxDos]} />
      <View style={[style.box, style.boxTres]} />
      <View style={[style.box, style.boxCuatro]} />

      <View style={[style.box, style.boxUno]} />
      <View style={[style.box, style.boxDos]} />
      <View style={[style.box, style.boxTres]} />
      <View style={[style.box, style.boxCuatro]} />

      <View style={[style.box, style.boxUno]} />
      <View style={[style.box, style.boxDos]} />
      <View style={[style.box, style.boxTres]} />
      <View style={[style.box, style.boxCuatro]} />

      <View style={[style.box, style.boxUno]} />
      <View style={[style.box, style.boxDos]} />
      <View style={[style.box, style.boxTres]} />
      <View style={[style.box, style.boxCuatro]} />

      <View style={[style.box, style.boxUno]} />
      <View style={[style.box, style.boxDos]} />
      <View style={[style.box, style.boxTres]} />
      <View style={[style.box, style.boxCuatro]} />

      <View style={[style.box, style.boxUno]} />
      <View style={[style.box, style.boxDos]} />
      <View style={[style.box, style.boxTres]} />
      <View style={[style.box, style.boxCuatro]} />
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
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap', //si no hay sufiiente espacio colocalo en una nuev fila o columna dependinedo si soy fila o columna
    // gap: 10,
    //columnGap: 15, //
  },
  box: {
    // flex: 1,
    height: '10%',
    width: '20%',
  },
  boxUno: {
    backgroundColor: '#5856D6',
  },
  boxDos: {
    backgroundColor: '#4240a2',
    // alignSelf: 'flex-end',
  },
  boxTres: {
    backgroundColor: '#2e2d71',
  },
  boxCuatro: {
    backgroundColor: '#222155',
  },
});
