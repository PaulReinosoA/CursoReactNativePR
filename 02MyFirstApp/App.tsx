import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {HelloWordScreen} from './src/presentation/screens/HelloWordScreen';
// import {CounterScreen} from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
// import {CounterM3Screen} from './src/presentation/screens/CounterM3Screen';
import FontAwesome6 from '@react-native-vector-icons/fontawesome6';
// import {BoxObjectModelScreen} from './src/presentation/screens/BoxObjectModelScreen';
// import {DimensionScreen} from './src/presentation/screens/DimensionScreen';
// import {PositionScreen} from './src/presentation/screens/PositionScreen';
// import {FlexScreen} from './src/presentation/screens/FlexScreen';
// import {FlexDirectionScreen} from './src/presentation/screens/FlexDirectionScreen';
import {HomeWorkScreen3} from './src/presentation/screens/HomeWorkScreen3';

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
          {/* <CounterM3Screen /> */}
          {/* <BoxObjectModelScreen /> */}
          {/* <DimensionScreen /> */}
          {/* <PositionScreen /> */}
          {/* <FlexScreen /> */}
          {/* <FlexDirectionScreen /> */}
          <HomeWorkScreen3 />
        </SafeAreaView>
      </PaperProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
