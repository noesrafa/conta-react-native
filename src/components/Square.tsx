/* eslint-disable */
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native'
import React from 'react'
// === Dimensions ===
const {width, height} = Dimensions.get('screen');

const Square = ({scrollX}) => {

  const inputRange = [(1 - 1) * width, 1 * width, (1 + 1) * width];

  const backgroundColor = scrollX.interpolate({
    inputRange,
    outputRange: ['#00B897', '#7A91FD', '#F77465'],
    extrapolate: 'clamp',
  });

  
  return (
    <Animated.View
      style={[
        styles.square,{backgroundColor}
      ]}
    />
  )
}

export default Square

const styles = StyleSheet.create({
  square: {
    width: height / 1.6,
    height: height,
    borderRadius: 86,
    position: 'absolute',
    top: -height * 0.6,
    transform: [
      {
        rotate: '35deg',
      },
    ],
  }
});

