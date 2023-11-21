import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,

} from "react-native";

import { CustomInput, CustomButton } from "../../components";
import { useNavigation } from '@react-navigation/native';
//import type {Node} from 'react';
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';
const Classes = () => {
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
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>CLASSES</Text>
        <CustomInput
          placeholder="Username"
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
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: 30,
      paddingVertical: 100,
      flexDirection: "column",
      marginVertical: 50,
    },
    welcomeText: {
      fontSize: 45,
      fontWeight: "bold",
      fontFamily: "Georgia",
      marginVertical: -140,
    },
    text: {
      fontSize: 15,
      fontWeight: "light",
      fontFamily: "Georgia",
    },
    forgotText: {
      paddingHorizontal: 2,
    },
   
  });


export default Classes;