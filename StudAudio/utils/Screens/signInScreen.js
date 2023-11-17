import React, {
  useState

} 
from "react";
import { View, Text, Image , StyleSheet, useWindowDimensions} from "react-native";
import { Themes, Images } from "../../assets/Themes";
import {
  CustomInput
} from "../../components"

//  <Image source={Images.spotify} style={styles.topIcon} />
const SignInScreen = () => {
  const {height} = useWindowDimensions(); // used to generate height based on device
  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');
  return (
    <View style = {styles.container}>
     <Text style={styles.welcomeText}>Welcome{'\n'}back!</Text>
     <CustomInput placeholder= "Username" input = {username} setInput = {setUsername} secureTextEntry={false}/>
     <CustomInput placeholder= "Password" input = {password} setInput = {setPassword} secureTextEntry={true}/>
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
