import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Pressable,
  FlatList,
  SafeAreaView,

} from 'react-native';

import {
  SignInScreen,
  SignUpScreen,
  ForgotPassword,
  ResetPassword
  
} from "./utils";
import {
  CustomInput
} from "./components"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In" component={SignInScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Forgot Password" component={ForgotPassword} />
      <Stack.Screen name="Reset Password" component={ResetPassword} />
    </Stack.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
