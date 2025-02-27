import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectModelScreen</Text> */}
      <View style={styles.purpleBox} />
      <View style={styles.purpleBox}>
        <Text style={styles.title}>BoxObjectModelScreen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    height: 30,
    fontSize: 15,
    paddingHorizontal: 90,
    paddingVertical: 3, //! espacio interno!!
    color: 'white',
    // borderWidth: 10,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',//margin: 20,
    marginHorizontal: 20, //! espacio externo!!
    marginVertical: 50,
  },
});
