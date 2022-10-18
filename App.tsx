/* eslint-disable */
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import React,{useState, useRef} from 'react';
import Onboarding from './src/screens/Onboarding';
import Square from './src/components/Square';

export default function App () {
  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      {/* <Square /> */}
      <Onboarding />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})