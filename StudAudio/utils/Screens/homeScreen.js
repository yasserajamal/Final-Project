import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from "react-native";

import { CustomInput, CustomButton } from "../../components";
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const { username, setUsername } = useState("");
    const { password, setPassword } = useState("");
    const navigation = useNavigation();
    const ifSignInPressed = () => {
      console.warn("SIGN IN HOMEPAGE"); // TODO IMPLEMENT HOMEPAGE
    };
    const ifforgotPressed = () => {
      navigation.navigate('Forgot Password')
    };
    const ifSignInCanvas = () => {
      console.warn("SIGN IN Canvas"); // TODO IMPLEMENT
    };
    const ifSignUpPressed = () => {
      return (
        navigation.navigate('Sign Up')
      );
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>CLASSES{"\n"}</Text>
        <CustomInput
          placeholder="Username or Email"
          input={username}
          setInput={setUsername}
          secureTextEntry={false}
        />
       
     
      </View>
    );
  };
  // canvas button :  <CustomButton text= "Sign In With Canvas" onPress = {ifSignInCanvas} type= "canvas" fgcolor="white" bgcolor = "#f70d1a"/>
  const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      padding: 30,
      paddingVertical: 100,
      flexDirection: "column",
      marginVertical: 50,
    },
    welcomeText: {
      fontSize: 70,
      fontWeight: "bold",
      fontFamily: "Georgia",
      marginBottom: 20,
    },
    text: {
      fontSize: 15,
      fontWeight: "light",
      fontFamily: "Georgia",
    },
    forgotText: {
      paddingHorizontal: 2,
    },
    pressableText: {
      alignSelf: "flex-end",
    },
  });


export default HomeScreen;