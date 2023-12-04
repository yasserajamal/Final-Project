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

import Dialog, { DialogContent } from "react-native-popup-dialog";
import { CustomInput, CustomButton } from "../../components";
import { useNavigation } from "@react-navigation/native";

const classesList = [
  // here you can add the screens for completing the assignments
  {
    id: "1",
    title: "ASSIGNMENTS",
    screenName: "Assignments",
    backgroundImage: require("../../assets/Themes/Assignments.jpg"),
  },
  {
    id: "2",
    title: "NOTES",
    screenName: "NotesOverview",
    backgroundImage: require("../../assets/Themes/notessss.png"),
  },
  {
    id: "3",
    title: "READINGS",
    screenName: "READINGS",
    backgroundImage: require("../../assets/Themes/myreadings.jpeg"),
  },
  {
    id: "4",
    title: "GRADES",
    screenName: "Grades",
    backgroundImage: require("../../assets/Themes/mygradess.webp"),
  },
];

const ShareScreen = ({ route, navigation }) => {
  // FYI we use route/useEffect to make it look like we have multiple classoverview screens for each class
  const { share } = route.params;
  console.log(share);
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

        <TouchableOpacity onPress={createAlert} style={{ marginLeft: 10 }}>
          <Text style={styles.textnew}>Submit</Text>
        </TouchableOpacity>
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
  textnew: {
    fontSize: 25,
    fontFamily: "Arial",
    marginHorizontal: 15,
    marginVertical: 10,
  },
  classButton: {
    marginVertical: 10,
    height: 120,
    width: 430,
  },
  overlay: {
    backgroundColor: "#00000080",
    flex: 1,
    justifyContent: "center",
  },
  classButtonText: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    fontFamily: "Arial",
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
