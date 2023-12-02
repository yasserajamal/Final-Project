// The following file contains the screen that shows all the available actions within a note

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";

const NotesOverview = ({ route, navigation }) => {
  const [notesArray, setNotesArray] = useState([]);
  console.log("hi");
  useEffect(() => {
    console.log("ne");
    const loadData = async () => {
      await load();
    };
    loadData();
  }, [navigation]);

  const load = async () => {
    try {
      // Retrieve all notes using AsyncStorage.getAllKeys and AsyncStorage.multiGet
      //const cle = await AsyncStorage.clear();
      const allKeys = await AsyncStorage.getAllKeys();
      const allNotes = await AsyncStorage.multiGet(allKeys);

      const parsedNotes = allNotes
        .filter(([key]) => key !== "noteCounter")
        .sort()
        .map(([key, value]) => ({
          noteName: key,
          noteContent: JSON.parse(value).content,
        }));

      setNotesArray(parsedNotes);
      console.log("User Notes:", parsedNotes);
    } catch (error) {
      console.error("Error loading notes:", error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigate(item.noteName)}>
      <View style={styles.overlay}>
        <Text style={styles.text}>{item.noteName}</Text>
        <FontAwesome name="share" size={24} color="black" onPress={share} />
      </View>
    </TouchableOpacity>
  );

  const navigate = (noteName) => {
    navigation.navigate("NotesText", { noteName });
  };

  const share = (noteName) => {
    navigation.navigate("ShareNote", { noteName });
  };

  //   const selectednote = notesList.find((item) => item.screenName === noteName);
  //   console.log(selectednote);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Notes")}>
        <View style={styles.overlay}>
          <Text style={styles.TitleText}>New Note</Text>
          <FontAwesome name="plus" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <FlatList
        data={notesArray}
        renderItem={renderItem}
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
    fontSize: 20,
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
});

export default NotesOverview;
