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
    }
    else {
      console.error("Authentication function not available");
    }
 
  }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Oh no! You're leaving... Are you sure?</Text>
        <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.yesButton]}
          onPress={isLogOut}
        >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.noButton]}
          onPress={() => navigation.navigate('STUAUDIO')}
        >
          <Text style={styles.buttonText}>No</Text>
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
    },
    text: {
      fontSize: 25,
      marginBottom: 20,
    },
     buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '80%',
      marginTop: 20,
    },
    button: {
      padding: 10,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: 100,
    },
    yesButton: {
      backgroundColor: 'green', 
    },
    noButton: {
      backgroundColor: 'red', 
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });


export default LogoutScreen;