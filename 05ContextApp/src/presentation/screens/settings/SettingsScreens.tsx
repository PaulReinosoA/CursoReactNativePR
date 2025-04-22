import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useCounterStore} from '../../store/Counter-store';
import {useNavigation} from '@react-navigation/native';

export const SettingsScreens = () => {
  const counter = useCounterStore(state => state.count);
  const incrementBy = useCounterStore(state => state.incrementBy);
  const decrementBy = useCounterStore(state => state.decrementBy);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Contador ${counter}`,
    });
  }, [counter, navigation]);

  return (
    <View style={styles.container}>
      <Text>Counter: {counter}</Text>
      <Pressable style={styles.primaryColor} onPress={() => incrementBy(1)}>
        <Text>incrementar</Text>
      </Pressable>
      <Pressable style={styles.primaryColor} onPress={() => decrementBy(1)}>
        <Text>decrementar</Text>
      </Pressable>
    </View>
  );
};
