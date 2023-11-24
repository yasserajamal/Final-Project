// same as underconstruction screen but with no button to return home. This for the connect feature only

import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const UnderConstructionScreenTwo = () => {
  const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../assets/UnderConstructionScreen.gif')} 
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>We're working on it!</Text>
        <Text style={styles.subtext}>This feature is under construction. Check back soon!</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white', 
    },
    image: {
      width: 600,
      height: 500, 
    },
    text: {
      fontSize: 32,
      fontWeight: 'bold',
      marginTop: 10,
      color: 'black', 
    },
    subtext: {
      fontSize: 14,
      color: 'grey',
      marginTop: 10,
    },
  });
  
  export default UnderConstructionScreenTwo;