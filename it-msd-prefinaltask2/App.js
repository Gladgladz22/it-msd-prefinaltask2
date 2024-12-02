
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

export default function App() {
  
  const offset = useSharedValue(0);

  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    };
  });

  
  const moveBox = () => {
    
    offset.value = offset.value === 0 ? 200 : 0;
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Move Box" onPress={moveBox} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    marginBottom: 20,
  },
});

