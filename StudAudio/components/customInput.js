import React from 'react'
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native'


const CustomInput = ({value, onChangeText, placeholder, secureTextEntry}) => {
   return (
    <View style = {styles.container}>
        <TextInput 
          value = {value}
          onChangeText={onChangeText}
          placeholder= {placeholder}
          placeholderTextColor={'black'}
          secureTextEntry = {secureTextEntry} 
          style = {styles.value}
          autoCapitalize= "none"
        
        />
    </View>
   )
}
const styles = StyleSheet.create({
container: {
    backgroundColor: 'white',
    width: '90%',
    borderColor: '#e8e8e8bh',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal:20,
    paddingVertical: 15,
    marginVertical: 15, //space username and password

},
value: {
  color: 'black',
  height: 20,
  fontSize: 18,
  fontFamily: 'Georgia'
}
});
export default CustomInput;