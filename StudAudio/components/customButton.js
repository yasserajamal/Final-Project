import React from 'react'
import {View, Text, StyleSheet, Pressable} from 'react-native'

const CustomButton = ({text, onPress, type = "primary"}) => {
    return (
        <Pressable onPress= {onPress} style = { [styles.container, styles[`container_${type}`]]}>
            <Text style = {[styles.text, styles[`text_${type}`]]}> {text} </Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: '68%',
        borderColor: '#e8e8e8bh',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal:20,
        paddingVertical: 15,
        marginVertical: 15, //space username and password
        alignItems: 'center'
    },
    container_primary: {
        backgroundColor: 'black', 
    },
    container_secondary: {
        backgroundColor: 'white',
        borderColor: 'white',
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        fontFamily: 'Georgia',
        fontWeight:'bold',
        fontSize: 17,
    },
    text_secondary: {
        color: 'grey',
        fontFamily: 'Georgia',
        fontWeight:'bold',
        fontSize: 17,
    }
   
  });
  
export default CustomButton;