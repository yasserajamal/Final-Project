import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Linking, ActivityIndicator, KeyboardAvoidingView } from "react-native";
import { Themes, Images } from "../../../assets/Themes";
import { CustomInput, CustomButton } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import{FireBaseAuth} from '../../../firebase';
import{createUserWithEmailAndPassword} from 'firebase/auth';
const openURL = (url) => {
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log(`Invalid URL: ${url}`);
      }
    })
    .catch((err) => console.error("An error occurred", err));
};

//  <Image source={Images.spotify} style={styles.topIcon} />
const SignUpScreen = () => {
  const [ email, setEmail ] = useState("");
  const [loading, setLoading] = useState(false);
  const [ password, setPassword ] = useState("");
  const [ Confirmpassword, setConfirmPassword ] = useState("");
  const navigation = useNavigation();
  const ifSignInPressed = () => {
    navigation.navigate("Sign In");
  };

  const ifRegisterPressed = async () => {
    if (password !== Confirmpassword) {
      alert("Passwords do not match. Please try again.");
      return; // Early return if passwords do not match
    }
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(FireBaseAuth, email, password);
      console.log(response);
      alert("Congratulations! Account created successfully. Please sign in to get started!");
      return navigation.navigate("Sign In");
    } catch(error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    }
    finally{
      setLoading(false);
    }};
  const ifTermsPressed = () => {
    openURL(
      "https://docs.google.com/document/d/1eL0uzS15OJWaSkXorewW8P24biUdESN3ncedmaHjt3o/edit?usp=sharing"
    );
  };
  const ifPrivacyPressed = () => {
    openURL(
      "https://docs.google.com/document/d/1BHW99zw2_-XT9RYOtvTP-G1dVg0L0IaJjC7LvtkmOnA/edit?usp=sharing"
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.CreateAccountText}>Create an account</Text>
      <CustomInput
        placeholder="Email"
        value={email}
        onChangeText= {(text) => setEmail(text)}
        secureTextEntry={false}
      />
      <CustomInput
        placeholder="Password"
        input={password}
        onChangeText= {(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder="Confirm Password"
        value={Confirmpassword}
        onChangeText= {(text) => setConfirmPassword(text)}
        secureTextEntry={true}
      />
   {loading ? (
      <ActivityIndicator size="large" color="black" />
    ) : (
      <>
        <CustomButton text="Register" onPress={ifRegisterPressed} />
        <Text style={styles.text}>
          By registering, you confirm that you accept our 
          <Text style={styles.web} onPress={ifTermsPressed}> Terms of Use </Text>
          and 
          <Text style={styles.web} onPress={ifPrivacyPressed}> Privacy Policy</Text>
        </Text>
        <Text style={styles.text}>
          Have an account? 
          <Text style={styles.bolded} onPress={ifSignInPressed}> Sign In </Text>
        </Text>
      </>
    )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // note i used same container throughout the sign in screens
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    paddingVertical: 100,
    flexDirection: "column",
    marginVertical: 50,
  },
  CreateAccountText: {
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Georgia",
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
    color: "orange",
    fontWeight: "bold",
  },
  bolded: {
    fontWeight: "bold",
    color: "black",
  },
});

export default SignUpScreen;
