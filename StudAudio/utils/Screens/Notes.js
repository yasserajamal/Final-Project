import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Pressable,
  ScrollView,
} from "react-native";
import Voice, { SpeechResultsEvent } from "@react-native-voice/voice";
import { withNavigation } from "@react-navigation/compat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const Notes = ({ route, navigation }) => {
  const [results, setResults] = useState([]);

  const [image, setImage] = useState(false);
  const changeImage = () => setImage((prev) => !prev);
  let link = image
    ? require("../../assets/Themes/microphone.png")
    : require("../../assets/Themes/microphone2.png");

  const [record, setRecord] = useState(false);
  const changeRecord = () => setRecord((prev) => !prev);

  const recording = () => {
    changeRecord();
    changeImage();
    if (!record) {
      startRecognizing();
    } else {
      stopRecording();
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      setImage(false);
      setRecord(false);
    }, [])
  );

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (e: SpeechResultsEvent) => {
    console.log("onSpeechResults: ", e);
    setResults(e.value);
  };

  const startRecognizing = async () => {
    //setResults([]);
    try {
      await Voice.start("en-US");
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecording = async () => {
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
      navigation.goBack();
    } catch (e) {
      console.error(e);
    }
  };

  const destroyRecognizer = async (selectedReading) => {
    try {
      await Voice.destroy();
      navigation.push("NotesNext", {
        noteContent: results,
      });
    } catch (e) {
      console.error(e);
    }
    setResults([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>New Voice Recording</Text>
      <Text style={styles.instructions}>
        Press the microphone and start speaking.
      </Text>
      <ScrollView style={styles.textbox}>
        {results.map((result, index) => (
          <Text key={`result-${index}`} style={styles.stat}>
            {result}
          </Text>
        ))}
      </ScrollView>
      <TouchableHighlight onPress={recording}>
        <Image style={styles.button} source={link} />
      </TouchableHighlight>
      <View style={styles.buttons}>
        <Pressable style={styles.test2} onPress={stopRecognizing}>
          <Text style={styles.test}>{"Cancel"}</Text>
        </Pressable>
        <Pressable style={styles.test2} onPress={destroyRecognizer}>
          <Text style={styles.test}>{"Finish"}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textbox: {
    backgroundColor: "#ededed",
    width: 350,
    margin: 7,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
  },
  button: {
    width: 50,
    height: 50,
  },
  test2: {
    backgroundColor: "black",
    width: "30%",
    borderColor: "#e8e8e8bh",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    margin: 15, //space username and password
    alignItems: "center",
  },
  test: {
    color: "white",
    fontFamily: "Georgia",
    fontWeight: "bold",
    fontSize: 17,
  },
  cancel: {
    color: "red",
    fontFamily: "Arial",
    fontSize: 20,
  },
  finish: {
    color: "black",
    fontFamily: "Arial",
    fontSize: 20,
  },
  new: {
    padding: 10,
    backgroundColor: "#ededed",
    margin: 15,
    width: 108,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
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
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 15,
    marginVertical: 10,
    position: "relative",
  },
  instructions: {
    textAlign: "center",
    color: "black",
    marginBottom: 5,
    fontFamily: "Arial",
    fontSize: 18,
  },
  stat: {
    textAlign: "center",
    color: "black",
    marginBottom: 1,
    fontSize: 18,
    fontFamily: "Arial",
  },
});

export default withNavigation(Notes);
