import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreem} from '../screens/home/HomeScreem';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreem} />
      <Stack.Screen name="Profile" component={ProductsScreen} />
      <Stack.Screen name="Profile" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
