import {useState} from 'react';
import {Text, View} from 'react-native';
import {GlobalStyles} from '../../theme/GlobalStyles';
import {FAB} from 'react-native-paper';
// import {PrimaryButton} from '../../components';

//* https://reactnative.dev/docs/components-and-apis  --> aqui esta la documentacion de reactnative
//* https://github.com/oblador/react-native-vector-icons/blob/master/packages/fontawesome6/README.md --> aqui esta la documentacion de reactnativeIcons --> sitio:https://callstack.github.io/react-native-paper/docs/guides/getting-started

export const CounterM3Screen = () => {
  const [Counter, setCounter] = useState(10);

  const addCounter = (value: number = 1) => {
    setCounter(Counter + value);
  };

  const resteCounter = () => {
    setCounter(0);
  };

  return (
    <View style={GlobalStyles.centerContainer}>
      <Text style={GlobalStyles.title}>{Counter}</Text>
      <Text>hola</Text>
      <FAB
        label="+1"
        style={GlobalStyles.fab}
        onPress={() => addCounter(2)}
        onLongPress={() => resteCounter()}
      />
    </View>
  );
};
