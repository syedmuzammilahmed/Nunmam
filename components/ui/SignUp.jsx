import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import {
    Alert,
    Dimensions,
    ImageBackground,
    ScrollView,
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
import Entypo from 'react-native-vector-icons/Entypo'

const { width, height } = Dimensions.get('window')

const SignUp = () => {
  const navigation = useNavigation()
  const [formData, setFormData] = useState({
    contactNo: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSignUp = () => {
   
    if (
      !formData.contactNo ||
      !formData.email ||
      !formData.firstName ||
      !formData.lastName ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      Alert.alert('Error', 'Please fill all fields')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match')
      return
    }
   navigation.navigate('WelcomeScreen')
  }

  const handleLogin = () => {
    console.log('Navigate to login')
    navigation.navigate('SignInScreen')
  }

  const handleForgotPassword = () => {
    console.log('Navigate to forgot password')
    navigation.navigate('ForgotPass')
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
      </ImageBackground>

      <View style={styles.innerContainer}>
        {/* Header */}
        <Text style={styles.header}>Sign Up</Text>

        {/* Form Container with Blue Dotted Border */}
        <View style={styles.formContainer}>
          {/* Contact Number */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Contact no'
              placeholderTextColor='#888'
              value={formData.contactNo}
              onChangeText={value => handleInputChange('contactNo', value)}
              keyboardType='phone-pad'
            />
          </View>

          {/* Email */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder='Email'
              placeholderTextColor='#888'
              value={formData.email}
              onChangeText={value => handleInputChange('email', value)}
              keyboardType='email-address'
              autoCapitalize='none'
            />
          </View>

          {/* First Name and Last Name Row */}
          <View style={styles.nameRow}>
            <View style={[styles.inputContainer, styles.halfWidth]}>
              <TextInput
                style={styles.input}
                placeholder='First Name'
                placeholderTextColor='#888'
                value={formData.firstName}
                onChangeText={value => handleInputChange('firstName', value)}
              />
            </View>
            <View style={[styles.inputContainer, styles.halfWidth]}>
              <TextInput
                style={styles.input}
                placeholder='Last Name'
                placeholderTextColor='#888'
                value={formData.lastName}
                onChangeText={value => handleInputChange('lastName', value)}
              />
            </View>
          </View>

          {/* Password */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder='Password'
              placeholderTextColor='#888'
              value={formData.password}
              onChangeText={value => handleInputChange('password', value)}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Entypo
                name={showPassword ? 'eye' : 'eye-with-line'}
                size={wp('5%')}
                color='#888'
              />
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder='Confirm Password'
              placeholderTextColor='#888'
              value={formData.confirmPassword}
              onChangeText={value =>
                handleInputChange('confirmPassword', value)
              }
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Entypo
                name={showConfirmPassword ? 'eye' : 'eye-with-line'}
                size={wp('5%')}
                color='#888'
              />
            </TouchableOpacity>
          </View>

          {/* Forgot Password Link */}
          <TouchableOpacity
            onPress={handleForgotPassword}
            style={styles.forgotPasswordContainer}
          >
            <Text style={styles.forgotPasswordText}>Forgot Your Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>

        {/* Login Link */}
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already havean account , </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
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
    paddingHorizontal: wp('6%'),
    // paddingTop: hp('8%'),
    paddingBottom: hp('4%'),
    alignItems: 'center'
  },
  header: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
    color: '#000',
    // marginBottom: hp('4%'),
    textAlign: 'center'
  },
  formContainer: {
    width: '100%',
    // borderWidth: 2,
    // borderColor: '#4A90E2',
    // borderStyle: 'dashed',
    borderRadius: wp('2%'),
    padding: wp('4%'),
    // marginBottom: hp('4%')
  },
  inputContainer: {
    marginBottom: hp('1.5%')
    // borderWidth: 1,
    // borderColor: 'gray',
    // borderRadius: 8,
    // borderBottomWidth: 1,
    // borderBottomColor: '#4A90E2',
    // borderStyle: 'dashed'
  },
  input: {
    height: hp('6%'),
    fontSize: wp('4%'),
    color: '#000',
    paddingVertical: hp('1%'),
    backgroundColor: '#f5f5f5',
    paddingHorizontal: wp('3%'),
    borderRadius: wp('5%'),
    borderWidth: 1,
    borderColor: 'gray'
  },
  passwordInput: {
    height: hp('6%'),
    fontSize: wp('4%'),
    color: '#000',
    paddingVertical: hp('1%'),
    backgroundColor: '#f5f5f5',
    paddingHorizontal: wp('3%'),
    paddingRight: wp('12%'),
    borderRadius: wp('5%'),
    borderWidth: 1,
    borderColor: 'gray'
  },
  eyeIcon: {
    position: 'absolute',
    right: wp('3%'),
    top: hp('1.5%'),
    padding: wp('1%')
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  halfWidth: {
    width: '48%'
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: hp('1%')
  },
  forgotPasswordText: {
    fontSize: wp('3.5%'),
    color: '#888'
    // textDecorationLine: 'underline'
  },
  signUpButton: {
    backgroundColor: '#000',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('25%'),
    borderRadius: wp('6%'),
    alignItems: 'center',
    marginBottom: hp('3%'),
    width: '80%'
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: '600'
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    fontSize: wp('3.5%'),
    color: '#888'
  },
  loginLink: {
    fontSize: wp('3.5%'),
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
})

export default SignUp
