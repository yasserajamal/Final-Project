import React from "react";
import { View, Dimensions, Text, StyleSheet, Pressable } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const CustomButton = ({
  text,
  onPress,
  type = "primary",
  bgcolor,
  fgcolor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgcolor ? { backgroundColor: bgcolor } : {},
      ]}
    >
      <Text
        style={[
          styles.text,
          styles[`text_${type}`],
          fgcolor ? { color: fgcolor } : {},
        ]}
      >
        {" "}
        {text}{" "}
      </Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    width: "68%",
    borderColor: "#e8e8e8bh",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 15, //space username and password
    alignItems: "center",
  },
  container_primary: {
    backgroundColor: "black",
  },
  container_secondary: {
    backgroundColor: "white",
    borderColor: "white",
    fontWeight: "bold",
  },
  // style for canvas button once added
  container_canvas: {
    backgroundColor: "black",
    width: "90%",
    borderColor: "#e8e8e8bh",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 15, //space username and password
  },
  text: {
    color: "white",
    fontFamily: "Georgia",
    fontWeight: "bold",
    fontSize: 17,
  },
  text_secondary: {
    color: "grey",
    fontFamily: "Georgia",
    fontWeight: "bold",
    fontSize: 17, // sign up text
  },
});

export default CustomButton;
