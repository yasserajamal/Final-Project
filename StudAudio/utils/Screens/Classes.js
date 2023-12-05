import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const classesList = [
  {
    id: "1",
    title: "ARABLANG 12",
    screenName: "ClassesOverview",
    backgroundImage: require("../../assets/Themes/arabic.jpeg"),
    readings: ["two", "three"],
  },
  {
    id: "2",
    title: "CS 147",
    screenName: "CS 147",
    backgroundImage: require("../../assets/Themes/stanford-sunset.jpeg"),
    readings: ["two", "three"],
  },
  {
    id: "3",
    title: "MATH 51",
    screenName: "MATH 51",
    backgroundImage: require("../../assets/Themes/math.jpeg"),
    readings: ["two", "three"],
  },
  {
    id: "4",
    title: "PHIL 180",
    screenName: "PHIL 180",
    backgroundImage: require("../../assets/Themes/PHIl.png"),
    readings: ["two", "three"],
  },
];

const Classes = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ClassesOverview", {
          className: item.title,
          readings: item.readings,
        })
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
      <Text style={styles.TitleText}>CLASSES</Text>
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
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
  },
  TitleText: {
    fontSize: windowWidth / 9.5,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 15,
    marginVertical: 10,
    textAlign: "center",
    position: "relative",
    justifyContent: "center",
  },
  classButton: {
    marginVertical: 10,
    height: windowHeight / 7.1,
    width: windowWidth - 10,
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

export default Classes;
