import React, {
    useState
  
  } 
  from "react";
  import { View, Text,StyleSheet, Pressable} from "react-native";
  import { Themes, Images } from "../../assets/Themes";
  import {
    CustomInput,
    CustomButton
  } from "../../components"
  import { useNavigation } from '@react-navigation/native';
  //  <Image source={Images.spotify} style={styles.topIcon} />
  const ForgotPassword = () => {
    const {username, setUsername} = useState('');
    const navigation = useNavigation();
   
    const ifSignInPressed = () => {
        console.warn("Sign In") // TODO IMPLEMENT
      };
      const ifSendPressed = () => {
        navigation.navigate('Reset Password')
      };
      const IfBacktoSignInPressed = () => {
        navigation.navigate('Sign In')
      };
    
  
    return (
      <View style = {styles.container}>
       <Text style={styles.CreateAccountText}>Reset Password</Text>
       <CustomInput placeholder= "Username or Email" input = {username} setInput = {setUsername} secureTextEntry={false}/>
        <CustomButton text= "Send" onPress = {ifSendPressed}/>
        <Text style = {styles.bolded}onPress={IfBacktoSignInPressed } > Back to Sign In </Text>
      </View>
    )
  }
  const styles = StyleSheet.create({
    container: { // note i used same container throughout the sign in screens 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
        paddingVertical: 100,
        flexDirection: 'column',
         marginVertical: 50,
    },
    CreateAccountText: {
      fontSize: 35,
      fontWeight: 'bold',
      fontFamily: 'Georgia',
      marginBottom: 20,
    },
  
    title: {
        fontSize: 20,
        margin: 10,
    },
    text: {
        color: "gray",
        marginVertical: 10,
        marginHorizontal: 30,
        fontSize: 15,
    },
    web: {
        color: 'orange',
        fontWeight: 'bold',
    },
    bolded: {
      fontWeight: 'bold',
      color: 'black'  
    },
   
  });
  
export default ForgotPassword;  