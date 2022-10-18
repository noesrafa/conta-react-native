/* eslint-disable */
import {StyleSheet, Text, View, Animated, Dimensions} from 'react-native';
import React from 'react';
// === Dimensions ===
const {width, height} = Dimensions.get('screen');

interface Props {
  data: any;
  scrollX: any;
}

const Paginator = ({data, scrollX}: Props) => {
  return (
    <View style={styles.row}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 30, 8],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#C9C9C9', '#00B897', '#C9C9C9'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[
              styles.dot,
              {width: dotWidth, backgroundColor}
            ]}></Animated.View>
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: "center",
    paddingBottom: 40,
  },
  dot: {
    height: 8,
    borderRadius: 10,
    backgroundColor: '#C9C9C9',
    marginHorizontal: 5,
  },
});
