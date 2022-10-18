/* eslint-disable */
import {
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  Dimensions,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {data} from '../../data';
import {LogoIcon} from '../../src/Icons';
import OnboardingItem from '../components/OnboardingItem';
import Paginator from '../components/Paginator';
import NextButton from '../components/NextButton';
import Square from '../components/Square';

// === Dimensions ===
const {width, height} = Dimensions.get('screen');

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef(null);
  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const viewableItemsChanged = useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const scrollTo = () => {
    if (currentIndex < data.length - 1) {
        slidesRef.current.scrollToIndex({ index: currentIndex + 1})
    } else {
        console.log('last');
    }
  }

  return (
    <View style={styles.container}>
        <Square scrollX={scrollX}/>
        <View style={styles.logo}>
        <LogoIcon />
      </View>
      <View >
        <FlatList
          data={data}
          keyExtractor={item => item.key}
          renderItem={({item}) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          scrollEventThrottle={32}
          bounces={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
      </View>
      <NextButton scrollTo={scrollTo}/>
      <Paginator data={data} scrollX={scrollX}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  logo: {
    position: 'absolute',
    top: 2,
    left: 0,
    width: '100%',
    alignItems: 'center',
    marginTop: '20%',
  },
});
