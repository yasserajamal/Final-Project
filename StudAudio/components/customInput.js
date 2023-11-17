import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

const CustomInput = ({input, setInput, placeholder, secureTextEntry}) => {
   return (
    <View style = {styles.container}>
        <TextInput 
          input = {input}
          onChangeText={setInput}
          placeholder= {placeholder}
          placeholderTextColor={'black'}
          secureTextEntry = {secureTextEntry} 
          style = {styles.input}
        
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
    borderRadius: 5,
    paddingHorizontal:20,
    paddingVertical: 15,
    marginVertical: 15, //space username and password

},
input: {
  color: 'black',
  height: 20,
  fontSize: 18,
  fontFamily: 'Georgia'
}
});
export default CustomInput;