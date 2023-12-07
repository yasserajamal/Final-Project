// The following file contains the screen that shows all the available actions within a class

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

const ShareScreen = ({ route, navigation }) => {
  const { share } = route.params;
  const [text, onChangeText] = React.useState("");

  const createAlert = () =>
    Alert.alert("Success", "Note Successfully Sent", [
      { text: "OK", onPress: () => navigation.navigate("NotesOverview") },
    ]);

  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>{share}</Text>
      <View style={styles.center}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter contact information"
        />

        {/* <TouchableOpacity onPress={createAlert} style={{ marginLeft: 10 }}> */}
        <Pressable style={styles.test2} onPress={createAlert}>
          <Text style={styles.test}>{"Submit"}</Text>
        </Pressable>
        {/* <Text style={styles.textnew}>Submit</Text> */}
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-start",
  },
  test: {
    color: "white",
    fontFamily: "Georgia",
    fontWeight: "bold",
    fontSize: 17,
  },
  center: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 20,
  },
  TitleText: {
    fontSize: 45,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 15,
    marginVertical: 10,
    position: "relative",
  },
  test2: {
    backgroundColor: "black",
    width: "30%",
    borderColor: "#e8e8e8bh",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 15,
    alignItems: "center",
  },
  textnew: {
    fontSize: 25,
    fontFamily: "Arial",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  input: {
    height: 50,
    width: 350,
    borderWidth: 1,
    fontSize: 20,
    fontFamily: "Arial",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
  },
});

export default ShareScreen;
