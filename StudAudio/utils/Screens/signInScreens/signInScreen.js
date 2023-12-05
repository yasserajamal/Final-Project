import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
  Pressable,
  ActivityIndicator,
} from "react-native";

import { CustomInput, CustomButton } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { FireBaseAuth } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const SignInScreen = ({ route }) => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const setIsAuthenticated = route.params?.setIsAuthenticated;
  const navigation = useNavigation();
  const ifSignInPressed = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(
        FireBaseAuth,
        Email,
        password
      );
      setLoading(false);
      setIsAuthenticated(true); // set to false if authentication fails
    } catch (error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
      setLoading(false);
    }
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
            <Text style={styles.forgotText}>{"\n"}Forgot password?</Text>
          </Pressable>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: ((windowWidth + windowHeight) / 2) * 0.05,
  },
  welcomeText: {
    fontSize: ((windowWidth + windowHeight) / 2) * 0.1, // Adjust the factor as needed
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginBottom: ((windowWidth + windowHeight) / 2) * 0.02,
  },
  text: {
    fontSize: windowWidth * 0.03,
    fontWeight: "light",
    fontFamily: "Georgia",
  },
  forgotText: {
    paddingHorizontal: windowWidth * 0.02,
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "Georgia",
  },
  pressableText: {
    alignSelf: "center",
  },
});

export default SignInScreen;
