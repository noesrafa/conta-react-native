import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
  } from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../../theme/appTheme';
import {LogoGreenIcon} from '../../Icons';
// === Dimensions ===
const {width, height} = Dimensions.get('screen');
const fixWidth = width * 0.9;

const FirstSteps = ({navigation}) => {
  const animation = new Animated.Value(0);
  const inputRange = [0, 0.5, 1];
  const outputRange = [1, 0.95, 1];
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
    }).start();
  };

  const onPress = () => {
    navigation.navigate('SearchScreen');
  };

  return (
    <Animated.View style={{transform: [{scale}]}}>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={1}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        onPress={onPress}>
        <Text style={styles.title}>Primeros</Text>
        <Text style={styles.title}>Pasos</Text>
        <Text style={styles.subtitle}>¿Debó declarar impuestos?</Text>
        <View style={styles.logo}>
          <LogoGreenIcon />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default FirstSteps;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.principal,
    width: fixWidth,
    height: fixWidth,
    alignSelf: 'center',
    borderRadius: 40,
    borderBottomLeftRadius: 0,
    justifyContent: 'center',
    marginTop: 55,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: 40,
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
    lineHeight: 48,
  },
  subtitle: {
    fontFamily: FONTS.regular,
    fontSize: 17,
    alignSelf: 'center',
    color: '#fff',
    marginTop: 14,
    paddingBottom: 20,
  },
  logo: {
    position: 'absolute',
    bottom: -1,
    left: 0,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});
