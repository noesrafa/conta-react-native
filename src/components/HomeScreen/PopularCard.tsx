import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {populars} from '../../Queries';
import {COLORS, FONTS} from '../../theme/appTheme';

const PopularCard = () => {
  const {loading, error, data} = useQuery(populars);

  const animation = new Animated.Value(0);
  const [opacity] = React.useState(new Animated.Value(1));
  const inputRange = [0, 0.5, 1];
  const outputRange = [1, 0.95, 1];
  const scale = animation.interpolate({inputRange, outputRange});

  if (loading) return <Text>Loading</Text>;

  if (error) return <Text>{`Error! ${error.message}`}</Text>;

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      {data.populars.map((item, i) => (
        <Animated.View style={{transform: [{scale}]}}>
          <TouchableOpacity
            key={i}
            style={styles.container}
            onPressIn={onPressIn}
            onPressOut={onPressOut}>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
            <Text style={styles.title}>{item.title}</Text>
            <Image style={styles.image} source={{uri: item.image.url}} />
          </TouchableOpacity>
        </Animated.View>
      ))}
    </>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.gray100,
    marginBottom: 22,
    borderRadius: 20,
    width: '100%',
    height: 150,
    justifyContent: 'center',
    paddingLeft: 40,
  },
  title: {
    color: '#000',
    fontFamily: FONTS.medium,
    fontSize: 22,
    maxWidth: '70%',
    lineHeight: 30,
    marginTop: 10,
  },
  subtitle: {
    color: COLORS.gray300,
    fontFamily: FONTS.regular,
  },
  image: {
    width: 100,
    height: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
    resizeMode: 'contain',
    // backgroundColor: "red",
    borderBottomRightRadius: 20,
  },
});
