import {Platform, Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPres?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPres}: Props) => {
  return (
    <Pressable
      // style={(styles.button, styles.buttonPressed)}
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPres && onLongPres()}>
      <Text style={styles.textButon}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    color: 'white',
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746AB' : 'white',
  },
  textButon: {
    color: Platform.OS === 'android' ? 'white' : '#4746AB',
  },
});
