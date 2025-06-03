import React from 'react'
import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('window')

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Vector.png')}
        style={styles.headerBackground}
        resizeMode='cover'
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => console.log('Back pressed')} // Replace with navigation.goBack()
        >
           <AntDesign name="left" size={20}/>
        </TouchableOpacity>
        <View style={styles.logoBox}>
          <Image
            source={require('../../assets/images/nunmamLogo.png')}
            style={styles.imagelogo}
            resizeMode='contain'
          />
        </View>
      </ImageBackground>
      <Image
        source={require('../../assets/images/Frame.png')}
        style={styles.image}
        resizeMode='contain'
      />
      <View style={styles.subtitleRow}>
        <Text style={styles.nunmamTag}>Nunmam</Text>
      </View>

      <Text style={styles.subtitle}>
        தமிழ் இலக்கியம் மற்றும் பாரம்பரியம்{'\n'}
        உங்கள் புதிய பயணத்தின் தொடக்கமாக அமைந்துள்ளது.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Complete</Text>
      </TouchableOpacity>
      <Text style={styles.loginText}>
        Already have an account?{' '}
        <TouchableOpacity onPress={() => console.log('Login pressed')}>
          <Text style={styles.loginLink}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  headerBackground: {
    width: '100%',
    height: hp('30%'),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: hp('2%')
  },
  logoBox: {
    width: wp('15%'),
    height: wp('15%'),
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: -70
  },
  backButton: {
    position: 'absolute',
    top: hp('5%'),
    left: wp('4%'),
    zIndex: 10,
    padding: 8,
    backgroundColor:'#fff',
    borderRadius: wp("2%")
  },
  backButtonText: {
    color: '#000',
    fontSize: wp('4.5%'),
    fontWeight: 'bold'
  },
  topLeftText: {
    position: 'absolute',
    top: 2,
    left: 4,
    fontSize: wp('2.5%'),
    color: '#333'
  },
  kText: {
    fontSize: wp('7.5%'),
    color: '#333',
    transform: [{ rotate: '135deg' }]
  },
  nunmamText: {
    fontSize: wp('3.5%'),
    color: '#000',
    marginTop: 5
  },
  image: {
    width: wp('40%'),
    height: hp('20%'),
    marginTop: hp('-3%')
  },
  imagelogo: {
    width: wp('20%'),
    height: hp('10%'),
    marginTop: hp('-5%')
  },
  title: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#000',
    marginTop: hp('2%')
  },
  subtitleRow: {
    flexDirection: 'row',
    marginTop: hp('3%')
  },
  nunmamTag: {
    backgroundColor: '#FF6A3D',
    color: '#fff',
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('0.5%'),
    borderRadius: wp('2%'),
    fontWeight: 'bold',
    fontSize: wp('3.5%')
  },
  subtitle: {
    fontSize: wp('3.8%'),
    textAlign: 'center',
    color: '#555',
    marginTop: hp('3%'),
    lineHeight: hp('2.8%'),
    paddingHorizontal: wp('5%')
  },
  button: {
    backgroundColor: '#000',
    paddingHorizontal: wp('20%'),
    paddingVertical: hp('1.8%'),
    borderRadius: wp('8%'),
    marginTop: hp('4%')
  },
  buttonText: {
    color: '#fff',
    fontSize: wp('4%')
  },
  loginText: {
    fontSize: wp('3.5%'),
    color: '#888',
    marginTop: hp('19%'),
    textAlign: 'center'
  },
  loginLink: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    top: 4
  }
})

export default WelcomeScreen
