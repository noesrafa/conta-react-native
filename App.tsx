/* eslint-disable */
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import React,{useState, useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';

export default function App () {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  
  
  return (
      <NavigationContainer>
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
        <StackNavigator />
    </View>
      </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})