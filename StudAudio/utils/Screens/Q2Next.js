// The following file contains the screen that shows all the available actions within a note

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import TextToSpeechAssn from "./TextToSpeechAssn";
import AsyncStorage from "@react-native-async-storage/async-storage";
import DropDownPicker from "react-native-dropdown-picker";

const Q2Next = ({ route, navigation }) => {
  const { noteContent, question, className } = route.params;
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Q1", value: "Q1" },
    { label: "Q2", value: "Q2" },
  ]);
  const defaultOption = "Q2";
  useEffect(() => {}, []);

  const createAlert = () =>
    Alert.alert(
      "You have completed all questions! Do you want to submit?",
      "You cannot undo a submission.",
      [{ text: "No" }, { text: "Yes", onPress: () => this._saveNote() }]
    );

  _saveNote = async () => {
    try {
      await AsyncStorage.setItem(
        `Q2`,
        JSON.stringify({
          content: noteContent,
        })
      );
      console.log("Note saved successfully!");
      // navigation.push("NotesOverview", {
      //   noteName: num,
      //   noteContent: noteContent,
      // });

      await AsyncStorage.removeItem("Assignment 1");
      await AsyncStorage.setItem(
        "Assignment 1 Submitted",
        JSON.stringify({ content: "Assignment 1" })
      );
      navigation.push("Assignments", { className });
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };
  const onRateChange = async (value) => {
    setValue(value);
    console.log(className);
    if (value === "Q1") {
      navigation.navigate("Q1", { className });
      //navigation.push("Q1"); //go to q1next
    }
  };

  //setEditName("Note " + num);
  return (
    <View style={styles.container}>
      <View style={styles.both}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={onRateChange}
          defaultOption={defaultOption}
          placeholder={"Q2"}
          style={{
            zIndex: 999,
            justifyContent: "flex-end",
            marginLeft: -70,
            marginTop: 10,
          }}
          containerStyle={{
            position: "relative",
            width: 80,
            zIndex: 9999,
          }}
          dropDownContainerStyle={{
            //marginTop: -140,
            marginLeft: -70,
            marginTop: -50,
            zIndex: 9999,
          }}
          listItemContainerStyle={{ height: 30 }}
        />
        <Text style={styles.TitleText}>Q2</Text>
      </View>
      <Text style={styles.welcome}>Question</Text>
      <TextToSpeechAssn
        style={{ zIndex: 999 }}
        passedData={question}
      ></TextToSpeechAssn>
      <Text style={styles.welcome}>Answer</Text>
      <ScrollView style={styles.textbox}>
        <Text style={styles.noteContent}>{noteContent}</Text>
      </ScrollView>
      {/* <View style={styles.buttons}>
        <Pressable style={styles.new} onPress={() => navigation.goBack()}>
          <Text style={styles.redo}>{"REDO"}</Text>
        </Pressable>
        <Pressable style={styles.new} onPress={this._saveNote}>
          <Text style={styles.save}>{"SAVE"}</Text>
        </Pressable> */}
      <View style={styles.buttons}>
        <Pressable style={styles.test2} onPress={() => navigation.goBack()}>
          <Text style={styles.test}>{"Redo"}</Text>
        </Pressable>
        <Pressable style={styles.test2} onPress={() => createAlert()}>
          <Text style={styles.test}>{"Save"}</Text>
        </Pressable>
      </View>
    </View>
    //</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  test2: {
    backgroundColor: "black",
    width: "30%",
    borderColor: "#e8e8e8bh",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 15, //space username and password
    alignItems: "center",
  },
  both: {
    flexDirection: "row",
    marginEnd: 80,
    padding: 5,
  },
  TitleText: {
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 15,
    marginVertical: 10,
    textAlign: "center",
  },
  test: {
    color: "white",
    fontFamily: "Georgia",
    fontWeight: "bold",
    fontSize: 17,
  },
  textbox: {
    backgroundColor: "#ededed",
    width: 350,
    margin: 7,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
  },
  noteName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  noteContent: {
    fontSize: 18,
  },
  textbox: {
    backgroundColor: "#ededed",
    width: 380,
    margin: 7,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
  },
  button: {
    width: 50,
    height: 50,
  },
  redo: {
    color: "red",
    fontFamily: "Arial",
    fontSize: 20,
  },
  save: {
    color: "black",
    fontFamily: "Arial",
    fontSize: 20,
  },
  new: {
    padding: 10,
    backgroundColor: "#ededed",
    margin: 15,
    width: 108,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
  },
  buttons: {
    justifyContent: "space-around",
    flexDirection: "row",
    padding: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    fontFamily: "Arial",
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 15,
    marginVertical: 10,
    position: "relative",
  },
  stat: {
    textAlign: "center",
    color: "black",
    marginBottom: 1,
    fontSize: 15,
    fontFamily: "Arial",
  },
});
export default Q2Next;
