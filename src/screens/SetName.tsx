/* eslint-disable */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Keyboard,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import globalStyles from '../theme/appTheme';
import {LogoIcon} from '../Icons';
import NextButton from '../components/NextButton';
import {COLORS} from '../theme/appTheme';
// ===== LocalStorage =====
import AsyncStorage from '@react-native-async-storage/async-storage';

// === Dimensions ===
const {width, height} = Dimensions.get('screen');

const SetName = ({navigation}) => {
  const [name, setName] = useState('');
  const [keyboardShow, setKeyboardShow] = useState(false);

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardShow(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardShow(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const scrollTo = () => {
    if (nameValidation()) {
      //Async storage
      const saveName = async () => {
        await AsyncStorage.setItem('userName', name);
      };
      saveName();
      navigation.navigate('HomeScreen');
    }
  };

  const nameValidation = (): boolean => {
    return name !== '';
  };

  return (
    <View style={globalStyles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={globalStyles.logo}>
        <LogoIcon color1="#00B897" color2="#000" />
      </View>
      <Text
        style={[globalStyles.font_lg, {maxWidth: '55%', textAlign: 'center'}]}>
        ¿Cuál es tu nombre?
      </Text>
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Nombre"
          onChangeText={value => setName(value)}
        />
      </View>
      {!keyboardShow && (
        <View style={styles.button}>
          <NextButton enabled={nameValidation()} scrollTo={scrollTo} />
        </View>
      )}
    </View>
  );
};

export default SetName;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: 100,
  },
  textInput: {
    width: width * 0.8,
    borderBottomColor: COLORS.gray100,
    borderBottomWidth: 3,
    textAlign: 'center',
    padding: 20,
    marginTop: 30,
    fontSize: 18,
    fontFamily: 'Axiforma-Medium',
  },
});
