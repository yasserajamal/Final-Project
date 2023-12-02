import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const readingsList = [
  {
    id: "1",
    title: "INVISIBLE WOMEN",
    screenName: "ReadingsOverview",
    backgroundImage: require("../../assets/Themes/reading1.jpg"),
  },
  {
    id: "2",
    title: "THE DISCIPLINE OF TEAMS",
    screenName: "ReadingsOverview",
    backgroundImage: require("../../assets/Themes/reading2.jpg"),
  },
  {
    id: "3",
    title: "SUCCESSFULL BRAINSTORMING",
    screenName: "ReadingsOverview",
    backgroundImage: require("../../assets/Themes/reading4.jpg"),
  },
  {
    id: "4",
    title: "DESIGN CRITIQUES",
    screenName: "ReadingsOverview",
    backgroundImage: require("../../assets/Themes/reading3.jpg"),
  },
];

const Readings = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        // navigation.navigate("ReadingsOverview", { readingName: item.title })
        navigation.navigate("ReadingsOverview", { readingName: item.title })
      }
    >
      <ImageBackground
        source={item.backgroundImage}
        style={styles.readingButton}
        imageStyle={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.readingButtonText}>{item.title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}>READINGS</Text>
      <FlatList
        data={readingsList}
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
});

export default Readings;
