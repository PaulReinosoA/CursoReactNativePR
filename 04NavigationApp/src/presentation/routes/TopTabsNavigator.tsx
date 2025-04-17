import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {AboutScreen} from '../screens/about/AboutScreen';
import {HamburgerMenu} from '../components/shared/HamburgerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <>
      <HamburgerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
