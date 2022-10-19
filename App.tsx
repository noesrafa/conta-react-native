/* eslint-disable */
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from './src/theme/appTheme';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.COLORS,
      background: '#fff',
    },
  };

  const [initialRoute, setInitialRoute] = React.useState<any>(null)
  React.useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('userName');
        if (value !== null) {
          setInitialRoute("HomeScreen");
        } else {

          setInitialRoute("Onboarding");
        }
      } catch (e) {
      }
    };
    getData();
  }, []);

  return initialRoute !== null ? (
    <NavigationContainer theme={navTheme}>
      <View style={styles.container}>
        <StatusBar translucent backgroundColor={'transparent'} />
        <StackNavigator initialRoute={initialRoute}/>
      </View>
    </NavigationContainer>
  ) : (
    <View style={{backgroundColor: COLORS.principal, flex: 1,}}>
      <StatusBar translucent backgroundColor={'transparent'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
