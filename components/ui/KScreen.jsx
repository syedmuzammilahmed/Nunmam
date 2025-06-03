import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width, height } = Dimensions.get('window');

const NunmamScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.glowCircle}>
        <View style={styles.innerCircle}>
          <View style={styles.squareBox}>
            <Text style={styles.topLeftText}>θʰ</Text>
            <Text style={styles.kText}>K</Text>
          </View>
          <Text style={styles.bottomText}>NUNMAM</Text>
        </View>
      </View>
    </View>
  );
};

const CIRCLE_SIZE = width * 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowCircle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 1,
    backgroundColor: '#fff',
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    alignItems: 'center',
  },
  squareBox: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 10,
  },
  topLeftText: {
    position: 'absolute',
    top: 2,
    left: 4,
    fontSize: 10,
    color: '#333',
  },
  kText: {
    fontSize: 60,
    color: '#333',
    transform: [{ rotate: '180deg' }],
  },
  bottomText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
});

export default NunmamScreen;
