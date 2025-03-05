import {StatusBar, View} from 'react-native';
import {CalculatorScreen} from './presentation/screens/CalculatorScreen';
import {stylesGlobal} from './config/theme/AppTheme';

function App() {
  return (
    <View style={stylesGlobal.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CalculatorScreen />
    </View>
  );
}

export default App;
