/* eslint-disable */
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React, {useState, useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from './src/theme/appTheme';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {GraphProvider} from './src/context/GraphContext';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#fff',
    },
  };

  const [initialRoute, setInitialRoute] = React.useState<any>(null);
  React.useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('userName');
        if (value !== null) {
          setInitialRoute('HomeScreen');
        } else {
          setInitialRoute('Onboarding');
        }
      } catch (e) {}
    };
    getData();
  }, []);

  const client = new ApolloClient({
    uri: 'https://api-us-west-2.hygraph.com/v2/cl9gf14ss2ags01t857na251p/master',
    cache: new InMemoryCache(),
  });

  return initialRoute !== null ? (
    <ApolloProvider client={client}>
      <NavigationContainer theme={navTheme}>
        <AppState>
          <View style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <StackNavigator initialRoute={initialRoute} />
          </View>
        </AppState>
      </NavigationContainer>
    </ApolloProvider>
  ) : (
    <View style={{backgroundColor: COLORS.principal, flex: 1}}>
      <StatusBar translucent backgroundColor={'transparent'} />
    </View>
  );
}

const AppState = ({children}: {children: JSX.Element}) => {
  return <GraphProvider>{children}</GraphProvider>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
