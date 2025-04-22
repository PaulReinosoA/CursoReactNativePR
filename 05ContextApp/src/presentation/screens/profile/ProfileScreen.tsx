import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../../../config/app-theme';
import {useProfileStore} from '../../store/Profile-store';

export const ProfileScreen = () => {
  const name = useProfileStore(state => state.name);
  const email = useProfileStore(state => state.email);
  const changeProfile = useProfileStore(state => state.changeProfile);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{email}</Text>
      <Text style={styles.title}>{name}</Text>

      <Pressable
        style={styles.primaryColor}
        onPress={() => useProfileStore.setState({name: 'Washington'})}>
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={styles.primaryColor}
        onPress={() =>
          useProfileStore.setState({email: 'wreinoso@solidario.fin.ec'})
        }>
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryColor}
        onPress={() => changeProfile('P reinoso', 'preinoso@prueba.d.ec')}>
        <Text>Regresar name</Text>
      </Pressable>
    </View>
  );
};
