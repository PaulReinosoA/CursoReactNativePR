import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreem} from '../screens/home/HomeScreem';
import {ProductsScreen} from '../screens/products/ProductsScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {ProductScreen} from '../screens/products/ProductScreen';
// import {HamburgerMenu} from '../components/shared/HamburgerMenu';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export type RootStackParams = {
  Home: undefined;
  Product: {id: number; name: string};
  Products: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerShown: false,
    });
  });

  return (
    <>
      {/* <HamburgerMenu /> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {elevation: 0, shadowColor: 'transparent'},
        }}>
        <Stack.Screen name="Home" component={HomeScreem} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </>
  );
};
