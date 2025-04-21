import {Text, View} from 'react-native';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';
// import Icon from '@react-native-vector-icons/fontawesome6';
import {EvilIconVectorIcon} from '../../components/shared/EvilIconVectorIcon';

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
      <EvilIconVectorIcon name={'calendar'} color={'green'} size={65} />
    </View>
  );
};
