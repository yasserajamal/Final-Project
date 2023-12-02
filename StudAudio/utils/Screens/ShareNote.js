// The following file contains the screen that shows all the available actions within a note

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const readingsList = [
  {
    id: "1",
    title: "Messages",
    image: require("../../assets/Themes/messages.png"),
    screenName: "ReadingsOverview",
  },
  {
    id: "2",
    title: "Gmail",
    image: require("../../assets/Themes/gmail.png"),
    screenName: "ReadingsOverview",
  },
  {
    id: "3",
    title: "Slack",
    image: require("../../assets/Themes/slack.png"),
    screenName: "ReadingsOverview",
  },
  {
    id: "4",
    title: "Save to Files",
    image: require("../../assets/Themes/files.png"),
    screenName: "ReadingsOverview",
  },
];

const ShareNote = ({ route, navigation }) => {
  const { noteName } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("ShareScreen", { share: item.title })}
    >
      <View style={styles.textbox}>
        <Text style={styles.readingButtonText}>{item.title}</Text>
        <Image style={styles.button} source={item.image} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.contain}>
      <Text style={styles.TitleText}>Share</Text>
      <View style={styles.container}>
        <FlatList
          data={readingsList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  contain: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-start",
  },
  textbox: {
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
  TitleText: {
    fontSize: 45,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 15,
    marginVertical: 10,
    position: "relative",
    alignItems: "flex-start",
  },
  readingButton: {
    marginVertical: 10,
    height: 120,
    width: 430,
  },
  overlay: {
    backgroundColor: "#00000080",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  readingButtonText: {
    fontSize: 22,
    color: "black",
    textAlign: "center",
    fontFamily: "Arial",
  },
  button: {
    width: 30,
    height: 30,
  },
});
export default ShareNote;
