/* eslint-disable */
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeHeader from '../components/HomeHeader';
import globalStyles, {COLORS} from '../theme/appTheme';
import {TextInput} from 'react-native-gesture-handler';
import {SearchIcon} from '../Icons';
import FirstSteps from '../components/HomeScreen/FirstSteps';

const HomeScreen = ({navigation}:any) => {
  const [name, setName] = React.useState('');
  const [searchInput, setSearchInput] = React.useState('');
  React.useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('userName');
        if (value !== null) {
          setName(value);
        }
      } catch (e) {
        console.log('vacio');
      }
    };
    getData();
  }, []);

  const triggerSearch = () => {
    if (searchInput !== '') {
      navigation.navigate("SearchScreen")
    }
  }

  return (
    <View style={globalStyles.flex}>
      <HomeHeader />
      <ScrollView style={styles.container}>
        <View style={styles.welcomeText}>
          <Text style={globalStyles.font_lg}>Hola,</Text>
          <Text style={globalStyles.font_lg}>{name}</Text>
        </View>
        <View style={styles.inputContainer}>
          <SearchIcon />
          <TextInput
            placeholder="¿Qué estás buscando?"
            style={styles.inputText}
            onSubmitEditing={event => triggerSearch()}
            multiline={false}
            onChangeText={value => setSearchInput(value)}
          />
        </View>
        <FirstSteps navigation={navigation}/>
        <Text style={[globalStyles.font_md, styles.featuredText]}>
          Más populares
        </Text>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: '38%',
    paddingHorizontal: 20,
  },
  welcomeText: {
    paddingLeft: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderBottomColor: COLORS.gray100,
    borderBottomWidth: 2,
    paddingVertical: 10,
    alignSelf: 'center',
    marginTop: 40,
  },
  inputText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Axiforma-Medium',
    width: '90%',
  },
  featuredText: {
    alignSelf: "center",
    marginTop: 30
  }
});
