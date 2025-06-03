import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
    Dimensions,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
const { width, height } = Dimensions.get('window');

const OnboardingScreens = ({ onComplete }) => {
    const navigation = useNavigation()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(2);
  const scrollViewRef = useRef(null);

  useEffect(() => {
    let interval;
    if (currentIndex < 3 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (currentIndex < 3 && timer === 0) {
      handleNext();
    }
    return () => clearInterval(interval);
  }, [timer, currentIndex]);

  useEffect(() => {
    if (currentIndex < 3) {
      setTimer(2);
    }
  }, [currentIndex]);

  const handleNext = () => {
    if (currentIndex < 5) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true });
    }
  };

  const handleGetStarted = () => {
     navigation.navigate('SignUp')
  };

  const handleScroll = (event) => {
    if (currentIndex >= 3) {
      const scrollX = event.nativeEvent.contentOffset.x;
      const newIndex = Math.round(scrollX / width);
      if (newIndex !== currentIndex && newIndex >= 3 && newIndex < screens.length) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const handleMomentumScrollEnd = (event) => {
    if (currentIndex >= 3) {
      const scrollX = event.nativeEvent.contentOffset.x;
      const newIndex = Math.round(scrollX / width);
      if (newIndex !== currentIndex && newIndex >= 3 && newIndex < screens.length) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const LogoComponent = ({ isCircle, isLarge, withGlow }) => {
    const style = [
      styles.logo,
      isCircle && styles.logoCircle,
      isLarge && styles.logoLarge,
      withGlow && styles.logoGlow
    ];
    return (
      <View style={style}>
        <Text style={styles.logoText}>K</Text>
        <Text style={styles.logoSubText}>NUNMAM</Text>
      </View>
    );
  };

  const screens = [
    {
      backgroundColor: '#000',
      content: <View style={styles.centerContent}><LogoComponent /></View>,
    },
    {
      backgroundColor: '#000',
      content: <View style={styles.centerContent}><LogoComponent isCircle /></View>,
    },
    {
      backgroundColor: '#000',
      content: <View style={styles.centerContent}><LogoComponent isCircle isLarge withGlow /></View>,
    },
    {
      backgroundColor: '#fff',
      content: (
        <View style={styles.centerContent}>
          <LogoComponent />
          <Text style={styles.tamiltext}>یہ ایک نمونہ میتن ہے{"\n"}جو کسی بھی طرح کا مطالبہ نہیں</Text>
        </View>
      ),
    },
    {
      backgroundColor: '#fff',
      content: (
        <View style={styles.centerContent}>
          <Text style={styles.tamiltext}>یہ ایک نمونہ میتن ہے جو کسی بھی طرح کا مطالبہ نہیں</Text>
        </View>
      ),
    },
    {
      backgroundColor: '#fff',
      content: (
        <View style={styles.centerContent}>
          <LogoComponent />
          <Text style={styles.brandTitle}>Numnam</Text>
          <Text style={styles.brandSubText}>
            Lorem ipsum dolor sit amet consectetur. Tincidunt in blandit id donec, aenean libero. Hendrerit nibh suspendisse.
          </Text>
          <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle={currentIndex < 3 ? 'light-content' : 'dark-content'} backgroundColor={screens[currentIndex].backgroundColor} />

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={currentIndex >= 3}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {screens.map((screen, index) => (
          <View key={index} style={[styles.screen, { backgroundColor: screen.backgroundColor }]}> {screen.content} </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  screen: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  logoCircle: {
    borderRadius: 50,
  },
  logoLarge: {
    width: 180,
    height: 180,
    borderRadius: 90,
  },
  logoGlow: {
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 50,
    elevation: 40,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    transform: [{ rotate: '180deg' }]
  },
  logoSubText: {
    fontSize: 12,
    color: '#000',
    marginTop: 5,
    letterSpacing: 1
  },
  tamiltext: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 24,
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 24,
    textAlign: 'center'
  },
  brandSubText: {
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  getStartedButton: {
    marginTop: 30,
    backgroundColor: '#000',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  getStartedText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OnboardingScreens;