import React, { useState } from 'react'
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'

const SignInScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    console.log('Sign in attempted with:', { email, password })
  }

  const handleSocialLogin = provider => {
    console.log(`${provider} login clicked`)
  }

  const handleForgotPassword = () => {
    console.log('Forgot password clicked')
  }

  const handleSignUp = () => {
    console.log('Sign up clicked')
  }

  const handleBack = () => {
    console.log('Back button clicked')
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View>
          <View style={styles.logo}>
            <Image
              source={require('../../assets/images/Maskgroup.png')}
              style={styles.imagelogo}
              resizeMode='contain'
            />
          </View>
        </View>

        {/* Sign In Title */}
        <Text style={styles.title}>Sign In</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Email / Mobile no'
            placeholderTextColor='#9CA3AF'
            value={email}
            onChangeText={setEmail}
            keyboardType='email-address'
            autoCapitalize='none'
          />

          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#9CA3AF'
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Forgot Password */}
          <TouchableOpacity
            onPress={handleForgotPassword}
            style={styles.forgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot Your Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin('Google')}
          >
            <View style={[styles.socialIcon, styles.googleIcon]}>
              <Text style={styles.socialIconText}>G</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin('Facebook')}
          >
            <View style={[styles.socialIcon, styles.facebookIcon]}>
              <Text style={styles.socialIconText}>f</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialLogin('LinkedIn')}
          >
            <View style={[styles.socialIcon, styles.linkedinIcon]}>
              <Text style={styles.socialIconText}>in</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Don't have an account, </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    alignItems: 'center'
  },
  imagelogo: {
    height: 150,
    width: 150
  },
  backArrow: {
    fontSize: 24,
    color: '#6B7280'
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 32
  },
  avatarWrapper: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: '#60A5FA',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    position: 'relative'
  },
  avatar: {
    width: 64,
    height: 64,
    backgroundColor: '#FED7AA',
    borderRadius: 32,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  face: {
    width: 48,
    height: 40,
    backgroundColor: '#FDBA74',
    borderRadius: 24,
    position: 'absolute',
    top: 8
  },
  hair: {
    width: 56,
    height: 32,
    backgroundColor: '#000000',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    position: 'absolute',
    top: -4
  },
  glasses: {
    position: 'absolute',
    top: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  glassLeft: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#000000'
  },
  glassBridge: {
    width: 4,
    height: 2,
    backgroundColor: '#000000',
    marginHorizontal: 2
  },
  glassRight: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#000000'
  },
  shirt: {
    width: 48,
    height: 24,
    backgroundColor: '#4B5563',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    position: 'absolute',
    bottom: -12
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 35
  },
  inputContainer: {
    marginBottom: 24
  },
  input: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 16
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 8
  },
  forgotPasswordText: {
    color: '#6B7280',
    fontSize: 14
  },
  signInButton: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 32
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500'
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#D1D5DB'
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#6B7280',
    fontSize: 14
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
    marginBottom: 32
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center'
  },
  socialIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  googleIcon: {
    backgroundColor: '#EF4444'
  },
  facebookIcon: {
    backgroundColor: '#2563EB',
    borderRadius: 4
  },
  linkedinIcon: {
    backgroundColor: '#1D4ED8',
    borderRadius: 4
  },
  socialIconText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold'
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  signUpText: {
    color: '#6B7280',
    fontSize: 14
  },
  signUpLink: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500'
  }
})

export default SignInScreen
