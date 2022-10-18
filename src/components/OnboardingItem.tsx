/* eslint-disable */
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
 // === Dimensions ===
 const {width, height} = Dimensions.get('screen');

const OnboardingItem = ({item}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <Image
          source={item.image}
          style={{
            width: width / 1.5,
            height: height / 1.4,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  wrapper: {
    width: width,
    alignItems: 'center',
  },
  imageWrapper: {
    height: height / 1.8,
  },
  titleWrapper: {
    width: "60%"
  },
  title: {
    fontSize: width / 13,
    lineHeight:  width / 10,
    textAlign: 'center',
    fontFamily: 'Axiforma-Medium',
    color: '#000000',
  },
});
