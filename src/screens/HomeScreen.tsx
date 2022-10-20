/* eslint-disable */
import {StyleSheet, Text, View, ScrollView, Animated} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeHeader from '../components/HomeHeader';
import globalStyles, {COLORS} from '../theme/appTheme';
import {TextInput} from 'react-native-gesture-handler';
import {SearchIcon} from '../Icons';
import FirstSteps from '../components/HomeScreen/FirstSteps';
import PopularCard from '../components/HomeScreen/PopularCard';




const HomeScreen = ({navigation}: any) => {
  const [name, setName] = React.useState('');
  const [searchInput, setSearchInput] = React.useState('');
  // Animations
  const [reveal] = useState(new Animated.Value(30));
  const [reveal2] = useState(new Animated.Value(30));
  const [fontSize] = useState(new Animated.Value(0));
  const [fontSize2] = useState(new Animated.Value(0));

  
  
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

    setTimeout(() => {
      Animated.spring(reveal, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
      setTimeout(() => {
        // Animated.spring(
        //   fontSize2, {
        //   toValue: 0,
        //   useNativeDriver: false
        // }).start()
        Animated.spring(reveal2, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      }, 100);
    }, 100);
    // Animated.spring(
    //   fontSize, {
    //   toValue: 34,
    //   useNativeDriver: false
    // }).start()
  }, []);

  const triggerSearch = () => {
    if (searchInput !== '') {
      navigation.navigate('SearchScreen');
    }
  };

  return (
    <View style={globalStyles.flex}>
      <HomeHeader />
      <ScrollView style={styles.container}>
        <View style={styles.welcomeText}>
          <Animated.Text style={[globalStyles.font_lg, {top: reveal}]}>
            Hola,
          </Animated.Text>
          <Animated.Text style={[globalStyles.font_lg, {top: reveal2}]}>
            {name}
          </Animated.Text>
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
        <Animated.View>
          <FirstSteps navigation={navigation} />
        </Animated.View>
        <Text style={[globalStyles.font_md, styles.featuredText]}>
          Más populares
        </Text>
        <View style={styles.popularList}>
          <PopularCard/>
        </View>
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
    borderBottomColor: COLORS.grayLine,
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
    alignSelf: 'center',
    marginTop: 30,
  },
  popularList: {
    marginTop: 30
  }
});
