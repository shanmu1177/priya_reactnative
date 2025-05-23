 import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Img = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./img.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 5,
  },
  image: {
    width: 300,
    height: 700
  },
});

export default Img;