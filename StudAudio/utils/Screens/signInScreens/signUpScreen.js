import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Linking } from "react-native";
import { Themes, Images } from "../../../assets/Themes";
import { CustomInput, CustomButton } from "../../../components";
import { useNavigation } from "@react-navigation/native";

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
  const { username, setUsername } = useState("");
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const { Confirmpassword, setConfirmPassword } = useState("");
  const navigation = useNavigation();
  const ifSignInPressed = () => {
    navigation.navigate("Sign In");
  };

  const ifRegisterPressed = () => {
    navigation.navigate("Sign In");
  };
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
        placeholder="Username"
        input={username}
        setInput={setUsername}
        secureTextEntry={false}
      />
      <CustomInput
        placeholder="Email"
        input={email}
        setInput={setEmail}
        secureTextEntry={false}
      />
      <CustomInput
        placeholder="Password"
        input={password}
        setInput={setPassword}
        secureTextEntry={true}
      />
      <CustomInput
        placeholder="Confirm Password"
        input={Confirmpassword}
        setInput={setConfirmPassword}
        secureTextEntry={true}
      />
      <CustomButton text="Register" onPress={ifRegisterPressed} />
      <Text style={styles.text}>
        By registering, you confirm that you accept our {""}
        <Text style={styles.web} onPress={ifTermsPressed}>
          {" "}
          Terms of Use {""}{" "}
        </Text>
        and {""}{" "}
        <Text style={styles.web} onPress={ifPrivacyPressed}>
          Privacy Policy
        </Text>
      </Text>
      <Text style={styles.text}>
        Have an account?{" "}
        <Text style={styles.bolded} onPress={ifSignInPressed}>
          {" "}
          Sign In{" "}
        </Text>
      </Text>
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
