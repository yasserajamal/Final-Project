// The following file contains the screen that shows all the available actions within a note

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";

const Assignments = ({ route, navigation }) => {
  const [notesArray, setNotesArray] = useState([]);
  const [submittedArray, setSubmittedArray] = useState([]);
  console.log("hi");
  useEffect(() => {
    console.log("ne");
    const loadData = async () => {
      await load();
      await loadSubmitted();
    };
    loadData();
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      const loadData = async () => {
        await load();
        await loadSubmitted();
      };
      loadData();
    }, [])
  );

  const load = async () => {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      const allNotes = await AsyncStorage.multiGet(allKeys);

      const parsedNotes = allNotes
        .filter(([key]) => key === "Assignment 1" || key === "Assignment 2")
        .sort()
        .map(([key, value]) => ({
          noteName: key,
          noteContent: JSON.parse(value).content,
          noteDate: JSON.parse(value).date,
        }));

      setNotesArray(parsedNotes);
      console.log("User Notes:", parsedNotes);
    } catch (error) {
      console.error("Error loading notes:", error);
    }
  };

  const loadSubmitted = async () => {
    try {
      const allKeys = await AsyncStorage.getAllKeys();
      const allNotes = await AsyncStorage.multiGet(allKeys);

      const parsedNotes = allNotes
        .filter(
          ([key]) =>
            key === "Assignment 1 Submitted" ||
            key === "Assignment 2 Submitted" ||
            key === "Assignment 0 Submitted"
        )
        .sort()
        .map(([key, value]) => ({
          noteName: JSON.parse(value).content,
        }));

      setSubmittedArray(parsedNotes);
      console.log("User Notes:", parsedNotes);
    } catch (error) {
      console.error("Error loading notes:", error);
    }
  };
  const deleteNote = async (noteName) => {
    try {
      console.log(noteName);
      await AsyncStorage.removeItem(noteName);
      load();
    } catch (error) {
      console.error("Error loading notes:", error);
    }
  };

  //   const renderItem = ({ item }) => (
  //     <TouchableOpacity onPress={() => navigate(item.noteName)}>
  //       <View style={styles.overlay}>
  //         <Text style={styles.text}>{item.noteName}</Text>
  //         <View style={styles.close}>
  //           <FontAwesome
  //             name="trash"
  //             size={24}
  //             color="black"
  //             onPress={() => deleteNote(item.noteName)}
  //             style={{ marginRight: 15 }}
  //           />
  //           <FontAwesome name="share" size={24} color="black" onPress={share} />
  //         </View>
  //       </View>
  //     </TouchableOpacity>
  //   );
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigate(item.noteContent, item.noteName, item.noteDate)}
    >
      <ImageBackground
        style={styles.readingButton}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.readingButtonText}>{item.noteName}</Text>
          <Text style={styles.readingButtonTextSmall}>
            {"Due: " + item.noteDate}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  const renderItem2 = ({ item }) => (
    <ImageBackground
      style={styles.readingButton}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.readingButtonText}>{item.noteName}</Text>
      </View>
    </ImageBackground>
  );

  const navigate = (noteContent, noteName) => {
    navigation.navigate(noteContent, { noteName });
  };

  const share = (noteName) => {
    navigation.navigate("ShareNote", { noteName });
  };

  //   const selectednote = notesList.find((item) => item.screenName === noteName);
  //   console.log(selectednote);
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>ASSIGNMENTS</Text>
      <Text style={styles.TitleText}>Due Soon</Text>
      <FlatList
        data={notesArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.noteName}
      />
      <Text style={styles.TitleText}>Submitted</Text>
      <FlatList
        data={submittedArray}
        renderItem={renderItem2}
        keyExtractor={(item) => item.noteName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  Title: {
    fontSize: 45,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 15,
    marginVertical: 10,
    position: "relative",
  },
  textbox: {
    width: 350,
    margin: 7,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
  },
  text: {
    fontSize: 18,
    fontFamily: "Arial",
    position: "relative",
  },
  TitleText: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Georgia",
    textAlign: "center",
  },
  new: {
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: 1,
  },
  overlay: {
    justifyContent: "space-between",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    width: 360,
    marginBottom: 16,
    alignContent: "center",
  },
  close: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  readingButton: {
    marginVertical: 10,
    height: 120,
    width: 430,
  },
  overlay: {
    backgroundColor: "#00000080",
    flex: 1,
    justifyContent: "center",
  },
  readingButtonText: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    fontFamily: "Arial",
  },
  readingButtonTextSmall: {
    paddingVertical: 5,
    fontSize: 22,
    color: "white",
    textAlign: "center",
    fontFamily: "Arial",
  },
});

export default Assignments;
