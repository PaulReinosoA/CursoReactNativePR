import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {HelloWordScreen} from './src/presentation/screens/HelloWordScreen';
// import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';

const iconRender = (props: any) => (
  <FontAwesome6 {...props} iconStyle="solid" />
);

export const App = () => {
  return (
    <>
      <PaperProvider
        settings={{
          icon: iconRender,
        }}>
        <SafeAreaView style={styles.container}>
          {/* <HelloWordScreen name="Paul Rinoso" /> */}
          <CounterM3Screen />
        </SafeAreaView>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
