import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef, useState } from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

const { width, height } = Dimensions.get('window')

const OnboardingScreens = () => {
  const navigation = useNavigation()
  const scrollViewRef = useRef(null)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [timer, setTimer] = useState(2)

  const totalScreens = 6

  useEffect(() => {
    let interval

    if (currentIndex < 3 && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1)
      }, 1000)
    } else if (currentIndex < 3 && timer === 0) {
      handleNext()
    }

    return () => clearInterval(interval)
  }, [timer, currentIndex])

  useEffect(() => {
    if (currentIndex < 3) {
      setTimer(2)
    }
  }, [currentIndex])

  const handleNext = () => {
    if (currentIndex < totalScreens - 1) {
      const nextIndex = currentIndex + 1
      setCurrentIndex(nextIndex)
      scrollViewRef.current?.scrollTo({ x: nextIndex * width, animated: true })
    }
  }

  const handleGetStarted = () => {
    navigation.navigate('SignUp')
  }

  const handleScrollUpdate = event => {
    if (currentIndex >= 3) {
      const scrollX = event.nativeEvent.contentOffset.x
      const newIndex = Math.round(scrollX / width)
      if (
        newIndex !== currentIndex &&
        newIndex >= 3 &&
        newIndex < totalScreens
      ) {
        setCurrentIndex(newIndex)
      }
    }
  }

  const screens = [
    {
      backgroundColor: '#000',
      content: (
        <Image
          source={require('../../assets/images/nunmamLogo.png')}
          style={styles.imagelogo}
          resizeMode='contain'
        />
      )
    },
    {
      backgroundColor: '#000',
      content: (
        <View style={styles.centerContent}>
          {' '}
          <Image
            source={require('../../assets/images/nunmamLogo.png')}
            style={styles.imagelogo}
            resizeMode='contain'
          />
        </View>
      )
    },
    {
      backgroundColor: '#000',
      content: (
        <View style={styles.centerContent}>
          <Image
            source={require('../../assets/images/nunmamLogo.png')}
            style={styles.imagelogo}
            resizeMode='contain'
          />
        </View>
      )
    },
    {
      backgroundColor: '#fff',
      content: (
        <View style={styles.centerContent}>
          <Image
            source={require('../../assets/images/nunmamLogo.png')}
            style={styles.imagelogo}
            resizeMode='contain'
          />
          <Text style={styles.tamiltext}>
            தமிழ் வரலாறு கதைகள் மற்றும்{'\n'}
            இலக்கணங்களின் தொகுப்பு
          </Text>
        </View>
      )
    },
    {
      backgroundColor: '#fff',
      content: (
        <View style={styles.centerContent2}>
          <Text style={styles.tamiltext}>
            தமிழ் வரலாறு கதைகள் மற்றும்{'\n'}
            இலக்கணங்களின் தொகுப்பு
          </Text>
        </View>
      )
    },
    {
      backgroundColor: '#fff',
      content: (
        <View style={styles.centerContent}>
          <Image
            source={require('../../assets/images/nunmamLogo.png')}
            style={styles.imagelogo2}
            resizeMode='contain'
          />
          <View
            style={{ width: '100%', height: 5, backgroundColor: 'black' }}
          ></View>
          <Text style={styles.brandSubText}>
            Lorem ipsum dolor sit amet consectetur. Tincidunt in blandit id
            donec, aenean libero. Hendrerit nibh suspendisse.
          </Text>
          <TouchableOpacity
            style={styles.getStartedButton}
            onPress={handleGetStarted}
          >
            <Text style={styles.getStartedText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      )
    }
  ]

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={currentIndex < 3 ? 'light-content' : 'dark-content'}
        backgroundColor={screens[currentIndex].backgroundColor}
      />

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={currentIndex >= 3}
        onScroll={handleScrollUpdate}
        onMomentumScrollEnd={handleScrollUpdate}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {screens.map((screen, index) => (
          <View
            key={index}
            style={[styles.screen, { backgroundColor: screen.backgroundColor }]}
          >
            {screen.content}
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  screen: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    height: 250,
    widht: 170,
    backgroundColor: 'white',
    borderRadius: 150
  },
  centerContent2: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  centerContent1: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 90,
    height: 300,
    widht: 400,
    backgroundColor: 'white',
    borderRadius: 300
  },
  imagelogo: {
    height: 150,
    width: 150
  },
  imagelogo2: {
    height: 150,
    width: 150,
    top: -150
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  logoCircle: {},
  logoLarge: {
    width: 180,
    height: 250,
    borderRadius: 90
  },
  logoGlow: {
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 50,
    elevation: 40
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
    lineHeight: 24
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
    paddingHorizontal: 20
  },
  getStartedButton: {
    marginTop: 60,
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
})

export default OnboardingScreens
