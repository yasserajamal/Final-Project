import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";

import { CustomInput, CustomButton } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { FireBaseAuth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = ({ route }) => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const setIsAuthenticated = route.params?.setIsAuthenticated;
  const navigation = useNavigation();
  const ifSignInPressed = async () => {
    // setLoading(true);
    // try {

    //   const response = await signInWithEmailAndPassword(FireBaseAuth, Email, password);
    //   console.log(response);
    //   setLoading(false);
    //   setIsAuthenticated(true); // set to false if authentication fails
    // } catch(error){
    //   console.log(error);
    //   alert("Sign in failed: " + error.message);
    //   setLoading(false);
    // }
    setIsAuthenticated(true);
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
        value={Email}
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        secureTextEntry={false}
      />
      <CustomInput
        input={password}
        placeholder="Password"
        autoCapitalize="none" // avoid misspelling
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      {loading ? (
        <ActivityIndicator size="large" color="blacl" />
      ) : (
        <>
          <CustomButton text="Sign In" onPress={ifSignInPressed} />
          <Pressable onPress={ifforgotPressed} style={styles.pressableText}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </Pressable>
          <Text style={styles.text}>{"\n"}Don't have an account yet?</Text>
          <CustomButton
            text="Sign up"
            onPress={ifSignUpPressed}
            type="secondary"
            fgcolor={"black"}
            bgcolor={"white"}
          />
        </>
      )}
    </View>
  );
};
// canvas button :  <CustomButton text= "Sign In With Canvas" onPress = {ifSignInCanvas} type= "canvas" fgcolor="white" bgcolor = "#f70d1a"/>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    // paddingVertical: 100,
    flexDirection: "column",
    // marginVertical: 50,
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
