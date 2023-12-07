// The following file contains the screen that shows all the available actions within a note

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
  Dimensions,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Assignments = ({ route, navigation }) => {
  const { className } = route.params;
  const [notesArray, setNotesArray] = useState([]);
  const [submittedArray, setSubmittedArray] = useState([]);
  useEffect(() => {
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
        .filter(([key]) => key === "ASSIGNMENT 1" || key === "ASSIGNMENT 2")
        .sort()
        .map(([key, value]) => ({
          noteName: key,
          noteContent: JSON.parse(value).content,
          noteDate: JSON.parse(value).date,
        }));

      setNotesArray(parsedNotes);
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
    } catch (error) {
      console.error("Error loading notes:", error);
    }
  };
  const deleteNote = async (noteName) => {
    try {
      await AsyncStorage.removeItem(noteName);
      load();
    } catch (error) {
      console.error("Error loading notes:", error);
    }
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigate(item.noteContent, item.noteName, className)}
    >
      <ImageBackground
        source={require("../../assets/Themes/Assignments.jpg")}
        style={styles.readingButton}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.readingButtonText}>{item.noteName}</Text>
          <Text style={styles.readingButtonTextSmall}>
            {"DUE: " + item.noteDate}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  const renderItem2 = ({ item }) => (
    <ImageBackground
      source={require("../../assets/Themes/myreadings.jpeg")}
      style={styles.readingButton}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.readingButtonText}>{item.noteName}</Text>
      </View>
    </ImageBackground>
  );

  const navigate = (noteContent, noteName, className) => {
    navigation.navigate(noteContent, { noteName, className });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>ASSIGNMENTS</Text>
      <Text style={styles.TitleText}>DUE SOON</Text>
      <FlatList
        data={notesArray}
        renderItem={renderItem}
        keyExtractor={(item) => item.noteName}
      />
      <Text style={styles.TitleText}>SUBMITTED</Text>
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
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  Title: {
    fontSize: windowWidth / 9.5,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 15,
    marginVertical: 10,
    position: "relative",
  },
  TitleText: {
    fontSize: windowWidth / 15,
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
    marginVertical: 5,
    height: windowHeight / 7.1,
    width: windowWidth - 10,
  },
  overlay: {
    backgroundColor: "#00000080",
    flex: 1,
    justifyContent: "center",
  },
  readingButtonText: {
    fontSize: windowWidth / 12,
    color: "white",
    textAlign: "center",
    fontFamily: "Arial",
  },
  readingButtonTextSmall: {
    paddingVertical: 5,
    fontSize: windowWidth / 15,
    color: "white",
    textAlign: "center",
    fontFamily: "Arial",
  },
});

export default Assignments;
