import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import { GlobalStyles } from '../../theme/GlobalStyles';
// import {PrimaryButton} from '../../components';

//* https://reactnative.dev/docs/components-and-apis  --> aqui esta la documentacion de reactnative

export const CounterScreen = () => {
  const [Counter, setCounter] = useState(10);

  const addCounter = (value: number = 1) => {
    setCounter(Counter + value);
  };

  const resteCounter = () => {
    setCounter(0);
  };

  return (
    <View style={GlobalStyles.centerContainer}>
      <Text style={styles.title}>{Counter}</Text>

      {/* <Button onPress={() => addCounter()} title="+1" /> */}
      {/* <PrimaryButton
        label="Incrementar!!"
        onPress={() => addCounter()}
        onLongPres={() => resteCounter()}
      /> */}
      <Button
        onPress={() => addCounter()}
        onLongPress={() => resteCounter()}
        mode="contained">
        Incrementar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    textAlign: 'center',
    fontWeight: '300',
  },
});
