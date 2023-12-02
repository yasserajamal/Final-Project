// The following file contains the screen that shows all the available actions within a note

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const NotesText = ({ route }) => {
  const { noteName } = route.params;
  const [noteContent, setNoteContent] = useState("");

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

  return (
    <View style={styles.container}>
      <Text style={styles.noteName}>{noteName}</Text>
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
