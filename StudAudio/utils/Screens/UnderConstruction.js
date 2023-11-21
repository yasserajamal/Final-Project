import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const UnderConstructionScreen = () => {
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
        <Button
            title= "Return to Homepage"
            onPress={() => navigation.navigate('STUAUDIO')}
        />
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
  
  export default UnderConstructionScreen;
