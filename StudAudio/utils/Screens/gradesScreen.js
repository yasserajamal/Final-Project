import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Grades = () => {
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../assets/grades.gif')} 
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>We're working on it!</Text>
        <Text style={styles.subtext}>Our Grades Feature is taking inspiration from professors everywhere 
        and is meticulously calculating your grades</Text>
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
  
  export default Grades;