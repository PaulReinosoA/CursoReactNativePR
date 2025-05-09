import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
// import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {globalColors} from '../theme/theme';
import {Text, useWindowDimensions, View} from 'react-native';
import {ButtonTabsNavigator} from './ButtonTabsNavigator';
import {EvilIconVectorIcon} from '../components/shared/EvilIconVectorIcon';

const Drawer = createDrawerNavigator();

export const SideMenuDrawerNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 750 ? 'permanent' : 'slide',

        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <EvilIconVectorIcon name={'bonfire-outline'} color={color} />
          ),
        }}
        name="Tabs"
        component={ButtonTabsNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <EvilIconVectorIcon name={'person-circle-outline'} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
      <Text>sidebar</Text>
    </DrawerContentScrollView>
  );
};
