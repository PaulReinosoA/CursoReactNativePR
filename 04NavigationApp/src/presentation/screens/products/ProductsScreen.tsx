import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {FlatList} from 'react-native-gesture-handler';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';

const products = [
  {id: 1, name: 'product 1'},
  {id: 2, name: 'product 2'},
  {id: 3, name: 'product 3'},
  {id: 4, name: 'product 4'},
  {id: 5, name: 'product 5'},
  {id: 6, name: 'product 6'},
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 30}}>Products</Text>
      <FlatList
        data={products}
        renderItem={(
          {item}, // desestructuro item de la data -> data.item
        ) => (
          <PrimaryButton
            onPress={() =>
              navigation.navigate('Product', {
                name: item.name,
                id: item.id,
              })
            }
            labelText={item.name}
          />
        )}
      />

      <Text style={{marginBottom: 10, fontSize: 30}}>Ajustes</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        labelText="ajustes"
      />
    </View>
  );
};
