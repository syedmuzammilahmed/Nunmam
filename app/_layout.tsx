import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPass from "../components/ui/ForgotPass";
import NunmamInfoScreen from "../components/ui/NunmamInfoScreen";
import OTPVerification from "../components/ui/OTPVerification";
import SelectFavorites from "../components/ui/SelectFavorites";
import SignUp from "../components/ui/SignUp";
import SignInScreen from "../components/ui/SignInScreen";
import  OnboardingScreen from "../components/ui/OnboardingScreen";
import WelcomeScreen from "../components/ui/WelcomeScreen";



const Stack = createStackNavigator();

export default function App(){
  return (
  <NavigationIndependentTree>
  <NavigationContainer>

    <Stack.Navigator initialRouteName={"OnboardingScreen"} >
     
     <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }}></Stack.Screen>
    <Stack.Screen name="NunmamInfoScreen" component={NunmamInfoScreen} options={{ headerShown: false }}></Stack.Screen> 
    <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }}></Stack.Screen> 
    <Stack.Screen name="ForgotPass" component={ForgotPass} options={{ headerShown: false }}></Stack.Screen> 
    <Stack.Screen name="SelectFavorites" component={SelectFavorites} options={{ headerShown: false }}></Stack.Screen> 
    <Stack.Screen name="OTPVerification" component={OTPVerification} options={{ headerShown: false }}></Stack.Screen> 
    <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}></Stack.Screen> 
    <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }}></Stack.Screen> 


    </Stack.Navigator>  


  </NavigationContainer>
  </NavigationIndependentTree>
  )
}