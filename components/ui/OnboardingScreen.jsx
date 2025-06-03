import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const circleOpacity = useRef(new Animated.Value(0)).current;
  const circleScale = useRef(new Animated.Value(1)).current;
  const circleTranslateY = useRef(new Animated.Value(-height / 2)).current;

  const backgroundWhite = useRef(new Animated.Value(0)).current;

  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoScale = useRef(new Animated.Value(1)).current;

  const topLogoOpacity = useRef(new Animated.Value(0)).current;
  const topLogoScale = useRef(new Animated.Value(1)).current;

  const tamilTextOpacity = useRef(new Animated.Value(0)).current;
  const tamilTextTranslateY = useRef(new Animated.Value(30)).current;

  const englishTextOpacity = useRef(new Animated.Value(0)).current;
  const englishTextTranslateY = useRef(new Animated.Value(20)).current;

  const buttonOpacity = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    startAnimationSequence();
  }, []);

  const startAnimationSequence = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(circleOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true
        }),
        Animated.timing(circleTranslateY, {
          toValue: 0,
          duration: 1200,
          easing: Easing.out(Easing.exp),
          useNativeDriver: true
        })
      ]),

      Animated.delay(300),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true
      }),

      Animated.delay(1000),
      Animated.parallel([
        Animated.timing(circleScale, {
          toValue: 8, 
          duration: 1200,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true
        }),
        Animated.timing(backgroundWhite, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false
        }),
        Animated.timing(logoOpacity, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true
        })
      ]),

      Animated.delay(500),
      Animated.parallel([
        Animated.timing(tamilTextOpacity, {
          toValue: 1,
          duration: 1000,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true
        }),
        Animated.spring(tamilTextTranslateY, {
          toValue: 0,
          tension: 50,
          friction: 8,
          useNativeDriver: true
        })
      ]),

      Animated.delay(2000), 
      Animated.parallel([
        Animated.timing(tamilTextOpacity, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true
        }),
        Animated.timing(tamilTextTranslateY, {
          toValue: -30,
          duration: 600,
          useNativeDriver: true
        })
      ]),

      Animated.delay(300),
      Animated.parallel([
        Animated.timing(topLogoOpacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true
        }),
        Animated.spring(topLogoScale, {
          toValue: 1,
          tension: 80,
          friction: 6,
          useNativeDriver: true
        })
      ]),

      Animated.delay(500),
      Animated.parallel([
        Animated.timing(englishTextOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true
        }),
        Animated.timing(englishTextTranslateY, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true
        }),
        Animated.timing(buttonOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true
        }),
        Animated.spring(buttonScale, {
          toValue: 1,
          tension: 100,
          friction: 8,
          useNativeDriver: true
        })
      ])
    ]).start();
  };

  const handleGetStarted = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#000' />

      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: backgroundWhite.interpolate({
              inputRange: [0, 1],
              outputRange: ['#000', '#fff']
            }),
            zIndex: -1
          }
        ]}
      />

      <View style={styles.screen}>
        <View style={styles.animatedContainer}>
          <Animated.View
            style={[
              styles.animatedCircle,
              {
                opacity: circleOpacity,
                transform: [
                  { translateY: circleTranslateY },
                  { scale: circleScale }
                ]
              }
            ]}
          >
            <Animated.View
              style={{
                opacity: logoOpacity,
                transform: [{ scale: logoScale }]
              }}
            >
              <Image
                source={require('../../assets/images/nunmamLogo.png')}
                style={styles.logoImage}
                resizeMode='contain'
              />
            </Animated.View>
          </Animated.View>

          <Animated.View
            style={[
              styles.logoContainer,
              {
                opacity: topLogoOpacity,
                transform: [{ scale: topLogoScale }]
              }
            ]}
          >
            <Image
              source={require('../../assets/images/nunmamLogo.png')}
              style={styles.logoImage}
              resizeMode='contain'
            />
          </Animated.View>

          <Animated.View
            style={[
              styles.tamilTextContainer,
              {
                opacity: tamilTextOpacity,
                transform: [{ translateY: tamilTextTranslateY }]
              }
            ]}
          >
            <Text style={styles.tamilText}>
              தமிழ் வரலாறு கதைகள் மற்றும்{'\n'}
              இலக்கணங்களின் தொகுப்பு
            </Text>
          </Animated.View>

          <Animated.View
            style={[
              styles.englishTextContainer,
              {
                opacity: englishTextOpacity,
                transform: [{ translateY: englishTextTranslateY }]
              }
            ]}
          >
            <View style={styles.separator} />
            <Text style={styles.englishText}>
              Lorem ipsum dolor sit amet consectetur. Tincidunt in blandit id
              donec, aenean libero. Hendrerit nibh suspendisse.
            </Text>
          </Animated.View>
          <Animated.View
            style={[
              styles.buttonContainer,
              {
                opacity: buttonOpacity,
                transform: [{ scale: buttonScale }]
              }
            ]}
          >
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={handleGetStarted}
            >
              <Text style={styles.getStartedText}>Get Started</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  screen: {
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animatedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30
  },
  animatedCircle: {
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#ffffff',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 30,
    elevation: 20
  },
  logoContainer: {
    position: 'absolute',
    top: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoImage: {
    height: 120,
    width: 120
  },
  tamilTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tamilText: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    lineHeight: 32,
    fontWeight: '600'
  },
  englishTextContainer: {
    position: 'absolute',
    top: '45%',
    alignItems: 'center',
    width: '100%'
  },
  separator: {
    width: '80%',
    height: 2,
    backgroundColor: '#000',
    marginBottom: 20
  },
  englishText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 20
  },
  buttonContainer: {
    position: 'absolute',
    top: '70%'
  },
  getStartedButton: {
    backgroundColor: '#000',
    borderRadius: 25,
    width: 250,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  getStartedText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default OnboardingScreen;