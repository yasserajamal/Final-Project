import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Themes, Images } from "../../../assets/Themes";
import { CustomInput, CustomButton } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { sendPasswordResetEmail, fetchSignInMethodsForEmail } from 'firebase/auth';
import{FireBaseAuth} from '../../../firebase';
//  <Image source={Images.spotify} style={styles.topIcon} />







const ForgotPassword = () => {
  const [ Email, setEmail ] = useState("");
  const navigation = useNavigation();
  const ifSendPressed = async () => {
    try {
      await sendPasswordResetEmail(FireBaseAuth, Email);
      alert('If your email address is registered in our system, you will receive a password reset link shortly. Please check your inbox and follow the instructions to reset your password');
      navigation.navigate("Sign In");
    } catch (error) {
      alert(error.message);
    }
  };
  const IfBacktoSignInPressed = () => {
    navigation.navigate("Sign In");
  };

 
  return (
    <View style={styles.container}>
      <Text style={styles.CreateAccountText}>Reset Password</Text>
      <CustomInput
        placeholder="Email"
        value={Email}
        autoCapitalize= "none"
        onChangeText= {(text) => setEmail(text)}
        secureTextEntry={false}
      />
      <CustomButton text="Send" onPress={ifSendPressed} />
      <Text style={styles.bolded} onPress={IfBacktoSignInPressed}>
        Back to Sign In
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

export default ForgotPassword;
