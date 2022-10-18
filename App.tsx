/* eslint-disable */
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import React,{useState, useEffect} from 'react';
import Onboarding from './src/screens/Onboarding';
import Square from './src/components/Square';
import SplashScreen from 'react-native-splash-screen'


export default function App () {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  
  
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