// The following file contains the screen that shows all the available actions within a note

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";

const NotesText = ({ route }) => {
  const { noteName } = route.params;
  const [noteContent, setNoteContent] = useState("");
  const [editName, setEditName] = useState(noteName);

  useEffect(() => {
    loadNoteContent();
  }, [noteName]);

  const loadNoteContent = async () => {
    try {
      const noteData = await AsyncStorage.getItem(noteName);
      const parsedNote = JSON.parse(noteData);

      if (parsedNote) {
        setNoteContent(parsedNote.content);
      }
    } catch (error) {
      console.error("Error loading note content:", error);
    }
  };

  const editNoteName = async () => {
    try {
      console.log(editName);
      await AsyncStorage.removeItem(noteName);
      setEditName(editName);
      // await AsyncStorage.setItem(
      //   editName,
      //   JSON.stringify({ content: noteContent })
      // );
      await AsyncStorage.setItem(
        editName,
        JSON.stringify({
          noteNum: editName,
          content: noteContent,
        })
      );
    } catch (error) {
      console.error("Error editing note name:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.noteName}>{noteName}</Text> */}
      <TextInput
        style={styles.noteName}
        value={editName}
        onChangeText={(text) => setEditName(text)}
        onBlur={editNoteName}
      />
      <ScrollView style={styles.textbox}>
        <Text style={styles.noteContent}>{noteContent}</Text>
      </ScrollView>
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
    width: 380,
    margin: 7,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
    padding: 5,
  },
  notetext: {
    fontSize: 20,
    fontFamily: "Arial",
    textAlign: "center",
    marginHorizontal: 15,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  noteName: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 15,
    marginVertical: 10,
    position: "relative",
    alignItems: "flex-start",
  },
  noteContent: {
    fontSize: 18,
    fontFamily: "Arial",
  },
});
export default NotesText;
