import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const LogoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { setIsAuthenticated } =  route.params || {};
  const isLogOut = () => {
    if(setIsAuthenticated){
      setIsAuthenticated(false);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }], // this logic ensure that we don't return to logout screen once we click 'logout'
      });
    }
  }
    return (
      <View style={styles.container}>
        <Text style={styles.logoutText}>Log Out</Text>
        <Text style={styles.text}>Oh no! You're leaving... Are you sure?</Text>
        <View style={styles.buttonContainer}>

        <TouchableOpacity 
          style={[styles.button, styles.cancelButton]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.exitButton]}
          onPress={isLogOut}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'white',
    },
    text: {
      fontSize: 25,
      marginBottom: 20,
      fontFamily:'Arial'
    },
    logoutText: {
      fontSize: 35,
      fontFamily:'Georgia',
      fontWeight:'bold',
      padding:10,
    },
     buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%', 
      marginTop: 20,
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 180, 
      minHeight: 50, 
  //    backgroundColor: 'white', 
      borderColor: 'black', 
      borderWidth: 1, 
      borderRadius: 5, 
    },
    exitButton: {
      backgroundColor: '#E34234', 
    },
    cancelButton: {
      borderRadiusColor:'blue',
      color:'white'
    },
    cancelText: {
      color: 'black',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
     // backgroundColor:'#E34234'
    },
  });


export default LogoutScreen;