import {Text, View} from 'react-native';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';
import Icon from '@react-native-vector-icons/fontawesome6';

export const Tab1Screen = () => {
  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable
  //         onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
  //         <Text>Menú</Text>
  //       </Pressable>
  //     ),
  //   });
  // });

  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      <Icon name="rocket" size={30} color="blue" iconStyle="solid" />
    </View>
  );
};
