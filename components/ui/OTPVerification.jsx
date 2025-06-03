import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import {
    Alert,
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

const OTPVerification = () => {
  const navigation = useNavigation()
  const [otp, setOtp] = useState(['', '', '', '', ''])
  const inputRefs = useRef([])

  const handleOtpChange = (value, index) => {
    const newOtp = [...otp]
    newOtp[index] = value

    setOtp(newOtp)

    if (value !== '' && index < 4) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyPress = (key, index) => {
    if (key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleConfirm = () => {
    const otpCode = otp.join('')

    if (otpCode.length !== 5) {
      Alert.alert('Error', 'Please enter complete OTP code')
      return
    }
    navigation.navigate('SelectFavorites')
  }

  const handleResendCode = () => {
    console.log('Resending OTP code...')
    navigation.navigate("")
    Alert.alert('Success', 'OTP code has been resent to your email/mobile')
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Vector.png')}
        style={styles.headerBackground}
        resizeMode='cover'
      ></ImageBackground>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => console.log('Back pressed')}
      >
        <AntDesign name='left' size={20} />
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <Text style={styles.header}>OTP</Text>

        <Text style={styles.subText}>
          we send you an Code Please check your Mail{'\n'}
          /Mobile to Complete Otp Code
        </Text>

        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => (inputRefs.current[index] = ref)}
              style={[styles.otpInput, digit !== '' && styles.filledInput]}
              value={digit}
              onChangeText={value => handleOtpChange(value, index)}
              onKeyPress={({ nativeEvent }) =>
                handleKeyPress(nativeEvent.key, index)
              }
              keyboardType='numeric'
              maxLength={1}
              textAlign='center'
              selectTextOnFocus
            />
          ))}
        </View>

        <TouchableOpacity
          style={[
            styles.confirmButton,
            otp.join('').length !== 5 && styles.disabledButton
          ]}
          onPress={handleConfirm}
          disabled={otp.join('').length !== 5}
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleResendCode}
          style={styles.resendContainer}
        >
          <Text style={styles.resendText}>
            Already havean account,{' '}
            <Text style={styles.resendLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerBackground: {
    width: '100%',
    height: hp('30%'),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: hp('2%')
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
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp('8%'),
    width: '100%'
  },
  header: {
    fontSize: wp('8%'),
    fontWeight: 'bold',
    color: '#000',
    marginBottom: hp('3%'),
    textAlign: 'center'
  },
  subText: {
    fontSize: wp('3.8%'),
    color: '#666',
    textAlign: 'center',
    lineHeight: hp('3%'),
    marginBottom: hp('5%'),
    paddingHorizontal: wp('5%')
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('5%'),
    paddingHorizontal: wp('5%')
  },
  otpInput: {
    width: wp('12%'),
    height: wp('12%'),
    backgroundColor: '#e0e0e0',
    borderRadius: wp('3%'),
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: wp('1%'),
    borderWidth: 1,
    borderColor: 'transparent'
  },
  filledInput: {
    backgroundColor: '#f0f0f0',
    borderColor: '#FF6A3D',
    borderWidth: 1
  },
  confirmButton: {
    backgroundColor: '#000',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('25%'),
    borderRadius: wp('6%'),
    alignItems: 'center',
    marginBottom: hp('4%'),
    width: '80%'
  },
  disabledButton: {
    backgroundColor: '#ccc'
  },
  confirmText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: '600'
  },
  resendContainer: {
    marginTop: hp('2%')
  },
  resendText: {
    fontSize: wp('3.5%'),
    color: '#888',
    textAlign: 'center'
  },
  resendLink: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
})

export default OTPVerification
