import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList, 
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { CustomInput, CustomButton } from "../../components";
import { useNavigation } from '@react-navigation/native';


const classesList = [
  { id: '1', title: 'ARABLANG 12', screenName: 'Sign In' ,backgroundImage:require("../../assets/Themes/arabic.jpeg")},
  { id: '2', title: 'CS 157', screenName: 'UnderconstructionScreen', backgroundImage: require("../../assets/Themes/stanford-sunset.jpeg")},
  { id: '3', title: 'MATH 51', screenName: 'History201Screen', backgroundImage:require("../../assets/Themes/math.jpeg") },
  { id: '4', title: 'PHIL 180', screenName: 'History201Screen' ,backgroundImage:require("../../assets/Themes/PHIl.png")},

]

const Classes = () => {
    const navigation = useNavigation();
    const ifSignInPressed = () => {
      console.warn("SIGN IN HOMEPAGE"); // TODO IMPLEMENT HOMEPAGE
    };
    const ifforgotPressed = () => {
      navigation.navigate('Forgot Password')
    };

    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate(item.screenName)}>
        <ImageBackground 
          source={item.backgroundImage}
          style={styles.classButton}
          imageStyle={styles.backgroundImage}
        >
          {/* Overlay View */}
          <View style={styles.overlay}>
            <Text style={styles.classButtonText}>{item.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
    
    return (
      <View style={styles.container}>
         <Text style={styles.TitleText}>CLASSES</Text>
         <FlatList
            data={classesList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
      />
       
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:'100%',
      backgroundColor: 'white',
      alignItems: 'flex-start',
    },
    TitleText: {
      fontSize: 45,
      fontWeight: "bold",
      fontFamily: "Georgia",
      marginHorizontal: 15,
      marginVertical: 10,
      position: "relative",
    },
    classButton: {
      marginVertical: 10,
      height: 120, 
      width:430, 
    },
    overlay: {
      backgroundColor: '#00000080', 
      flex: 1, 
      justifyContent: 'center',
    },
    classButtonText: {
      fontSize: 32,
      color: 'white', 
      textAlign: 'center',
      fontFamily:'Arial',
    },
  
  });


export default Classes;