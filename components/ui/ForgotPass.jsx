import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
    Dimensions,
    ImageBackground,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import AntDesign from 'react-native-vector-icons/AntDesign'

const { width, height } = Dimensions.get('window')

const ForgotPass = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')

  const handleSend = () => {
    console.log('Send reset link to:', email)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Vector.png')}
        style={styles.headerBackground}
        resizeMode='cover'
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => console.log('Back pressed')}
        >
          <AntDesign name='left' size={20} />
        </TouchableOpacity>
        {/* <View style={styles.logoBox}>
          <Image
            source={require('../../assets/images/nunmamLogo.png')}
            style={styles.imagelogo}
            resizeMode='contain'
          />
        </View> */}
      </ImageBackground>

      <View style={styles.innerContainer}>
        <Text style={styles.header}>Forget Password</Text>
        <Text style={styles.subText}>
          Please, enter your email address. You will receive a link to create a
          new password via email.
        </Text>

        <TextInput
          style={styles.input}
          placeholder='Type an Email'
          placeholderTextColor='#888'
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#fff',
    borderRadius: wp('2%')
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
    position: 'absolute',
    bottom: hp('4%'), // instead of marginTop
    width: '100%',
    textAlign: 'center',
    flexDirection: 'row'
  },

  loginLink: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginLeft: 4 // instead of top
  },

  innerContainer: {
    flex: 1,
    marginTop: hp('8%'), // changed from 18%
    paddingHorizontal: wp('8%'),
    width: '100%'
  },

  header: {
    fontSize: wp('6.5%'),
    fontWeight: 'bold',
    marginBottom: hp('1.5%'),
    color: '#000'
  },
  subText: {
    fontSize: wp('3.5%'),
    color: '#666',
    marginBottom: hp('4%')
  },
  input: {
    height: hp('6.5%'),
    backgroundColor: '#eaeaea',
    borderRadius: wp('3%'),
    paddingHorizontal: wp('4%'),
    fontSize: wp('4%'),
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: hp('3%')
  },
  sendButton: {
    backgroundColor: '#000',
    paddingVertical: hp('1.8%'),
    borderRadius: wp('6%'),
    alignItems: 'center',
    marginBottom: hp('4%')
  },
  sendText: {
    color: '#fff',
    fontSize: wp('4.2%'),
    fontWeight: '600'
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default ForgotPass
