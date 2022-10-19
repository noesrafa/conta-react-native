import {StyleSheet, TouchableOpacity, View, Dimensions} from 'react-native';
import {ArrowRightIcon} from '../Icons';

 // === Dimensions ===
 const {width, height} = Dimensions.get('screen');

interface Props {
    scrollTo?: () => void;
    onPress?: () => void;
}

const NextButton = ({scrollTo}:Props) => {
  return (
      <TouchableOpacity style={styles.button} onPress={scrollTo}>
        <View style={styles.icon}>
          <ArrowRightIcon />
        </View>
      </TouchableOpacity>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {},
  button: {
    backgroundColor: '#00B897',
    height: 70,
    width: 70,
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginLeft: 3
  }
});
