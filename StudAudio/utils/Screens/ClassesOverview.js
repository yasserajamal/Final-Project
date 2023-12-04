// The following file contains the screen that shows all the available actions within a class

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { CustomInput, CustomButton } from "../../components";
import { useNavigation } from "@react-navigation/native";

const classesList = [
  // here you can add the screens for completing the assignments
  {
    id: "1",
    title: "ASSIGNMENTS",
    screenName: "Assignments",
    backgroundImage: require("../../assets/Themes/Assignments.jpg"),
  },
  {
    id: "2",
    title: "NOTES",
    screenName: "NotesOverview",
    backgroundImage: require("../../assets/Themes/notessss.png"),
  },
  {
    id: "3",
    title: "READINGS",
    screenName: "READINGS",
    backgroundImage: require("../../assets/Themes/myreadings.jpeg"),
  },
  {
    id: "4",
    title: "GRADES",
    screenName: "Grades",
    backgroundImage: require("../../assets/Themes/mygradess.webp"),
  },
];

const ClassesOverview = ({ route, navigation }) => {
  // FYI we use route/useEffect to make it look like we have multiple classoverview screens for each class
  const { className } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: className });
  }, [className, navigation]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(item.screenName, { className: className })
      }
    >
      <ImageBackground
        source={item.backgroundImage}
        style={styles.classButton}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.classButtonText}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>{className}</Text>
      <FlatList
        data={classesList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "flex-start",
  },
  TitleText: {
    fontSize: 45,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 15,
    marginVertical: 10,
    position: "relative",
  },
  classButton: {
    marginVertical: 10,
    height: 120,
    width: 430,
  },
  overlay: {
    backgroundColor: "#00000080",
    flex: 1,
    justifyContent: "center",
  },
  classButtonText: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    fontFamily: "Arial",
  },
});

export default ClassesOverview;
