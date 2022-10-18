/* eslint-disable */
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  Image,
  Dimensions,
  Easing,
  TouchableOpacity
} from 'react-native';
import React,{useState, useRef} from 'react';
import {data} from './data';
import {LogoIcon} from './src/Icons';

const {width, height} = Dimensions.get('screen');

const bgs = ['#C9C9C9', '#18b581', '#C9C9C9'];

const Indicator = ({scrollX}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40,
      }}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: 'clamp',
        });
        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: bgs.map(bg => bg),
          extrapolate: 'clamp',
          Easing,
        });

        return (
          <View>
            <Animated.View
              key={`indicator-${i}`}
              style={{
                height: 8,
                width: 8,
                borderRadius: 40,
                backgroundColor,
                marginHorizontal: 4,
                transform: [{scale}],
              }}
            />
          </View>
        );
      })}
    </View>
  );
};

const Square = ({scrollX}) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1,
  );

  const rotate = YOLO.interpolate({
    inputRange: [0, 1],
    outputRange: ['35deg', '-145deg'],
  });

  return (
    <Animated.View
      style={{
        width: height / 1.6,
        height: height,
        backgroundColor: '#00B897',
        borderRadius: 86,
        position: 'absolute',
        top: -height * 0.6,
        transform: [
          {
            rotate: rotate,
          },
        ],
      }}
    />
  );
};

const App = () => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0)

  const viawableItemsChanged = useRef(({ viewableItems }) =>{
    setCurrentIndex(viewableItems[0].index)
  }).current

  

  const scrollNext = () => {
    if(currentIndex < 2) {
      slidesRef.current.scrollToIndex()
    } else {
      console.log("last");
    }
  }

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current
  const slidesRef = useRef(null)

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <Square scrollX={scrollX} />
      <View style={styles.logo}>
        <LogoIcon />
      </View>
      <Animated.FlatList
        data={data}
        keyExtractor={item => item.key}
        horizontal
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={viawableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
        renderItem={({item}) => {
          return (
            <View style={styles.wrapper}>
              <View style={styles.imageWrapper}>
                <Image
                  source={item.image}
                  style={{
                    width: width / 1.5,
                    height: height / 1.4,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View>
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </View>
          );
        }}
      />
      <TouchableOpacity style={styles.button} onPress={scrollNext}>
        <Text>Next</Text>
      </TouchableOpacity>
      <Indicator scrollX={scrollX} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    alignItems: 'center',
    marginTop: '20%',
  },
  container: {
    flex: 1,
  },
  wrapper: {
    width: width,
    alignItems: 'center',
  },
  imageWrapper: {
    height: height / 1.8,
  },
  title: {
    paddingHorizontal: 40,
    fontSize: 34,
    lineHeight: 46,
    textAlign: 'center',
    fontFamily: 'Axiforma-Medium',
    color: '#000000',
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});
