/* eslint-disable */
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Animated,
} from 'react-native';
import {ArrowRightIcon} from '../Icons';
import {COLORS} from '../theme/appTheme';

// === Dimensions ===
const {width, height} = Dimensions.get('screen');

interface Props {
  scrollTo?: () => void;
  onPress?: () => void;
  enabled?: boolean;
}

const NextButton = ({scrollTo, enabled}: Props) => {
  const animation = new Animated.Value(0);
  const inputRange = [0, 0.5, 1];
  const outputRange = [1, 0.7, 1];
  const scale = animation.interpolate({inputRange, outputRange});

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start()
  };
  
  const onPress = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
    scrollTo()
  }

  return (
    <Animated.View style={{transform: [{scale}]}}>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: enabled ? COLORS.principal : COLORS.gray100},
        ]}
        activeOpacity={1}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}>
        <View style={styles.icon}>
          <ArrowRightIcon />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default NextButton;

const styles = StyleSheet.create({
  container: {},
  button: {
    height: 70,
    width: 70,
    alignSelf: 'center',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 3,
  },
});
