import React, {
    useState
  
  } 
  from "react";
  import { View, Text,StyleSheet} from "react-native";
  import {
    CustomInput,
    CustomButton
  } from "../../components"
  import { useNavigation } from '@react-navigation/native';
  //  <Image source={Images.spotify} style={styles.topIcon} />
  const ResetPassword = () => {
    const {code, setCode} = useState('');
    const {newPassword, setnewPassword} = useState('');
    const navigation = useNavigation();
   
    const ifSubmitPressed = () => {
        navigation.navigate('Sign In')
      };
      const ifBackToSignInPressed = () => {
        navigation.navigate('Sign In')
      };

  
    return (
      <View style = {styles.container}>
       <Text style={styles.CreateAccountText}>Reset Password</Text>
       <CustomInput placeholder= "Verification Code" input = {code} setInput = {setCode} secureTextEntry={false}/>
       <CustomInput placeholder= "Enter your new password" input = {newPassword} setInput = {setnewPassword} secureTextEntry={true}/>
       <CustomButton text="Submit" onPress={ifSubmitPressed} />
        <Text style = {styles.bolded}onPress={ifBackToSignInPressed} > Back to Sign In </Text>
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
    }
   
  });
  
export default ResetPassword;  