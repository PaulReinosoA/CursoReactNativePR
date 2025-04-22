import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useProfileStore} from '../../store/Profile-store';
import {useCounterStore} from '../../store/Counter-store';

export const HomeScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const count = useCounterStore(state => state.count);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{'counter: ' + count}</Text>
    </View>
  );
};
