import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {HelloWordScreen} from './src/presentation/screens/HelloWordScreen';
import {CounterScreen} from './src/presentation/screens/CounterScreen';
// import {PaperProvider} from 'react-native-paper';

export const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <HelloWordScreen name="Paul Rinoso" /> */}
        <CounterScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
