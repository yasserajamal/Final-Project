import React, {
  useState

} 
from "react";
import { View, Text, Image , StyleSheet, useWindowDimensions} from "react-native";
import { Themes, Images } from "../../assets/Themes";
import {
  CustomInput,
  CustomButton
} from "../../components"

//  <Image source={Images.spotify} style={styles.topIcon} />
const SignInScreen = () => {
  const {height} = useWindowDimensions(); // used to generate height based on device
  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');
  const ifSignInPressed = () => {
    console.warn("SIGN IN")
  };
  const ifforgotPressed = () => {
    console.warn("You forgot")
  };

  return (
    <View style = {styles.container}>
     <Text style={styles.welcomeText}>Welcome{'\n'}learner!</Text>
     <CustomInput placeholder= "Username" input = {username} setInput = {setUsername} secureTextEntry={false}/>
     <CustomInput placeholder= "Password" input = {password} setInput = {setPassword} secureTextEntry={true}/>
      <CustomButton text= "Sign In" onPress = {ifSignInPressed}/>
      <CustomButton text= "Forgot Password?" onPress = {ifforgotPressed} type="secondary" />
      <CustomButton text= "Sign In With Canvas" onPress = {ifSignInPressed}/>
      <CustomButton text= "Sign In With Apple" onPress = {ifSignInPressed}/>
      <Text> Don't have an account yet?  </Text>
      <CustomButton text= "Sign Up" onPress = {ifSignInPressed}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
   padding: 30,
   paddingVertical: 30,
   flexDirection: 'column',
    marginVertical: 40,
  },
  welcomeText: {
    fontSize: 70,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    marginBottom: 20,
  },
 
});



















export default SignInScreen;
