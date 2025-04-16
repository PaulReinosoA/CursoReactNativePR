import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {RootStackParams} from '../../routes/StackNavigator';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  });

  return (
    <View style={globalStyles.container}>
      <Text style={styles.container}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
