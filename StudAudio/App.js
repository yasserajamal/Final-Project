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
import {useState} from 'react';
import {
  SignInScreen,
  SignUpScreen,
  ForgotPassword,
  ResetPassword,
  HomeScreen,
  
} from "./utils";
import {
  CustomInput
} from "./components"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './components/bottomTabs';

const Stack = createStackNavigator();
const AppStack= createStackNavigator();


function AuthStack({setIsAuthenticated}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In" component={SignInScreen} initialParams={{ setIsAuthenticated: setIsAuthenticated }}/>
      <Stack.Screen name="Sign Up" component={SignUpScreen}/>
      <Stack.Screen name="Forgot Password" component={ForgotPassword}/>
      <Stack.Screen name="Reset Password" component={ResetPassword}/>
    </Stack.Navigator>
   
  );
}
function AppStacks() {
  return (
  <AppStack.Navigator>
    <AppStack.Screen name="STUDAUDIO" component={BottomTabs} options={{ headerTitle: '' }}/> 
 </AppStack.Navigator>

  );
}



export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <NavigationContainer>
     {isAuthenticated ? <AppStacks /> : <AuthStack  setIsAuthenticated={setIsAuthenticated} />}
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});
