// The following file contains the screen that shows all the available actions within a note

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NotesNext = ({ route, navigation }) => {
  const { noteContent } = route.params;
  const [num, setNum] = useState(1);

  useEffect(() => {
    const loadCount = async () => {
      const storedCount = await AsyncStorage.getItem("noteCounter");
      const count = storedCount ? parseInt(storedCount) : 1;
      setNum(count);
    };
    loadCount();
  }, []);

  _saveNote = async () => {
    try {
      const storedCount = await AsyncStorage.getItem("noteCounter");
      const curCount = storedCount ? parseInt(storedCount) : 1;
      await AsyncStorage.setItem("noteCounter", `${curCount + 1}`);

      await AsyncStorage.setItem(
        `Note ${curCount}`,
        JSON.stringify({
          noteNum: curCount,
          content: noteContent,
        })
      );

      console.log("Current count");
      console.log(curCount);
      console.log("Current num");
      console.log(num);
      //   setNum((prevNum) => {
      //     // Using the previous state to ensure correctness
      //     return curCount + 1;
      //   });

      console.log("Note saved successfully!");
      navigation.push("NotesOverview", {
        noteName: num,
        noteContent: noteContent,
      });
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>{"Note " + num}</Text>
      <ScrollView style={styles.textbox}>
        <Text style={styles.noteContent}>{noteContent}</Text>
      </ScrollView>
      <View style={styles.buttons}>
        <Pressable style={styles.new} onPress={this._saveNote}>
          <Text style={styles.save}>{"SAVE"}</Text>
        </Pressable>
        <Pressable style={styles.new} onPress={() => navigation.goBack()}>
          <Text style={styles.redo}>{"REDO"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
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
    width: 350,
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
    fontSize: 28,
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
export default NotesNext;
