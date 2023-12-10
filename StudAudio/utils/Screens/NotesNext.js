// The following file contains the screen that shows all the available actions within a note

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const NotesNext = ({ route, navigation }) => {
  const { noteContent } = route.params;
  const [num, setNum] = useState(1);
  const [editName, setEditName] = useState("Note " + num);
  const [editContent, setEditContent] = useState(noteContent);
  useEffect(() => {
    const loadCount = async () => {
      const storedCount = await AsyncStorage.getItem("noteCounter");
      const count = storedCount ? parseInt(storedCount) : 1;
      setNum(count);
      setEditName("Note " + count);
      setEditContent(noteContent);
    };
    loadCount();
  }, []);

  _saveNote = async () => {
    try {
      const storedCount = await AsyncStorage.getItem("noteCounter");
      const curCount = storedCount ? parseInt(storedCount) : 1;
      await AsyncStorage.setItem("noteCounter", `${curCount + 1}`);

      if (`Note ${curCount}` != editName) {
        await AsyncStorage.setItem(
          editName,
          JSON.stringify({
            noteNum: editName,
            content: editContent,
          })
        );
        navigation.push("NotesOverview", {
          noteName: editName,
          noteContent: editContent,
        });
      } else {
        await AsyncStorage.setItem(
          `Note ${curCount}`,
          JSON.stringify({
            noteNum: curCount,
            content: editContent,
          })
        );
        navigation.push("NotesOverview", {
          noteName: num,
          noteContent: editContent,
        });
      }
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.welcome}
        onChangeText={setEditName}
        value={editName}
      />
      <ScrollView style={styles.textbox}>
        <TextInput
          style={styles.noteContent}
          onChangeText={setEditContent}
          multiline={true}
          value={editContent.toString()}
        />
      </ScrollView>
      <View style={styles.buttons}>
        <Pressable style={styles.test2} onPress={() => navigation.goBack()}>
          <Text style={styles.test}>{"Redo"}</Text>
        </Pressable>
        <Pressable style={styles.test2} onPress={this._saveNote}>
          <Text style={styles.test}>{"Save"}</Text>
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
  test: {
    color: "white",
    fontFamily: "Georgia",
    fontWeight: "bold",
    fontSize: 17,
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
    width: windowWidth / 1.1,
    margin: 3,
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
