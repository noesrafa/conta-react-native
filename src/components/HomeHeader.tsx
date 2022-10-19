/* eslint-disable */
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import { LogoIcon, NotificationIcon, UserIcon } from '../Icons';
import { COLORS } from '../theme/appTheme';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <UserIcon />
      <LogoIcon color1={COLORS.principal} color2={"#000"}/>
      <NotificationIcon />
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#fff",
        paddingHorizontal: 40,
        paddingTop: "16%",
        paddingBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
