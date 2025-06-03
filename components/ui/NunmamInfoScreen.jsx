import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

const NunmamInfoScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoBlock}>
        <View style={styles.squareBox}>
          <Text style={styles.topLeftText}>θʰ</Text>
          <Text style={styles.kText}>K</Text>
        </View>
        <Text style={styles.title}>NUNMAM</Text>
      </View>
      <Text style={styles.tamilText}>
        தமிழ் வரலாற்று கதைகள் மற்றும்{'\n'}இலக்கியங்களின் தொகுப்பு
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoBlock: {
    alignItems: 'center',
    marginBottom: 20,
  },
  squareBox: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
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
  title: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  tamilText: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 22,
  },
});

export default NunmamInfoScreen;
