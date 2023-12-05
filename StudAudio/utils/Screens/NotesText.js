import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const NotesText = ({ route }) => {
  const { noteName } = route.params;
  const [editName, setEditName] = useState(noteName);
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    loadNoteContent();
  }, [noteName]);

  const loadNoteContent = async () => {
    try {
      const noteData = await AsyncStorage.getItem(noteName);
      const parsedNote = JSON.parse(noteData);

      if (parsedNote) {
        setEditContent(parsedNote.content);
      }
    } catch (error) {
      console.error("Error loading note content:", error);
    }
  };

  const editNoteName = async () => {
    try {
      await AsyncStorage.removeItem(noteName);
      setEditName(editName);
      await AsyncStorage.setItem(
        editName,
        JSON.stringify({
          noteNum: editName,
          content: editContent,
        })
      );
    } catch (error) {
      console.error("Error editing note:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.noteName}
        value={editName}
        onChangeText={(text) => setEditName(text)}
        onBlur={editNoteName}
      />
      <ScrollView style={styles.textbox}>
        <TextInput
          style={styles.noteContent}
          value={editContent.toString()}
          onChangeText={(text) => setEditContent(text)}
          onBlur={editNoteName}
        />
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
    width: windowWidth / 1.1,
    margin: 3,
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
