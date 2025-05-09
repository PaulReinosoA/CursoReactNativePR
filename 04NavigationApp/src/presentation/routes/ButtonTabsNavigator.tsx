import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
// import {Tab2Screen} from '../screens/tabs/Tab2Screen';
// import {Tab3Screen} from '../screens/tabs/Tab3Screen';
import {globalColors} from '../theme/theme';
// import {Text} from 'react-native';
import {TopTabsNavigator} from './TopTabsNavigator';
import {StackNavigator} from './StackNavigator';
import {EvilIconVectorIcon} from '../components/shared/EvilIconVectorIcon';

const Tab = createBottomTabNavigator();

export const ButtonTabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        sceneStyle: {backgroundColor: globalColors.background},
        headerShown: true,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
          borderColor: 'transparent',
        },
        tabBarStyle: {elevation: 0, borderTopWidth: 0},
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <EvilIconVectorIcon
              name={'accessibility-outline'}
              color={color}
              size={28}
            />
          ), //<Text style={{color}}>tab1</Text>,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <EvilIconVectorIcon
              name={'aperture-outline'}
              color={color}
              size={28}
            />
          ), //<Text style={{color}}>tab2</Text>,
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: '',
          tabBarIcon: ({color}) => (
            <EvilIconVectorIcon
              name={'airplane-outline'}
              color={color}
              size={28}
            />
          ), //<Text style={{color}}>tab3</Text>,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
