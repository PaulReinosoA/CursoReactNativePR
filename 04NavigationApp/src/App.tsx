import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

// import {StackNavigator} from './presentation/routes/StackNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {SideMenuDrawerNavigator} from './presentation/routes/SideMenuDrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {/* <StackNavigator /> */}
        <SideMenuDrawerNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
