import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
} from "react-native";

import { CustomInput, CustomButton } from "../../../components";
import { useNavigation } from "@react-navigation/native";

//  <Image source={Images.spotify} style={styles.topIcon} />
const SignInScreen = ({ route }) => {
  const { username, setUsername } = useState("");
  const { password, setPassword } = useState("");
  const setIsAuthenticated= route.params?.setIsAuthenticated;
  const navigation = useNavigation();
  const ifSignInPressed = () => {
    setIsAuthenticated(true); // set to false if authentication fails
  };
  const ifforgotPressed = () => {
    navigation.navigate("Forgot Password");
  };
  const ifSignUpPressed = () => {
    return navigation.navigate("Sign Up");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome{"\n"}learner!</Text>
      <CustomInput
        placeholder="Username or Email"
        input={username}
        setInput={setUsername}
        secureTextEntry={false}
      />
      <CustomInput
        placeholder="Password"
        input={password}
        setInput={setPassword}
        secureTextEntry={true}
      />
      <Pressable onPress={ifforgotPressed} style={styles.pressableText}>
        <Text style={styles.forgotText}> Forgot password?</Text>
      </Pressable>
      <CustomButton text="Sign In" onPress={ifSignInPressed} />
      <Text style={styles.text}> {"\n"}Don't have an account yet? </Text>
      <CustomButton
        text="Sign up"
        onPress={ifSignUpPressed}
        type="secondary"
        fgcolor={"black"}
        bgcolor={"white"}
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

export default SignInScreen;
