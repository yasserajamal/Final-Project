import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import TextToSpeechAssn from "./TextToSpeechAssn";
import Voice, { SpeechResultsEvent } from "@react-native-voice/voice";
import DropDownPicker from "react-native-dropdown-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const Q1 = ({ route, navigation }) => {
  const { className } = route.params;
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Q1");
  const [items, setItems] = useState([
    { label: "Q1", value: "Q1" },
    { label: "Q2", value: "Q2" },
  ]);
  const defaultOption = "Q1";

  const questionList = {
    "PHIL 180": "What is Hume's account of causation?",
    "ARABLANG 12":
      "What were the most advanced Arab communities in theh 7th century A.D.?",
    "CS 147": "What is a heuristic evaluation?",
    "MATH 51": "What is a displacement vector?",
  };

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;
    setValue("Q1");

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);
  useFocusEffect(
    React.useCallback(() => {
      setValue("Q1");
    }, [])
  );

  const onSpeechResults = (e: SpeechResultsEvent) => {
    console.log("onSpeechResults: ", e);
    setResults(e.value);
  };

  const startRecognizing = async () => {
    setResults([]);
    try {
      await Voice.start("en-US");
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
      navigation.push("Q1Next", {
        noteContent: results,
        question: selectedReading,
        className: className,
      });
    } catch (e) {
      console.error(e);
    }
    setResults([]);
  };

  const onRateChange = async (value) => {
    console.log(value);
    setValue(value);
    if (value === "Q2") {
      navigation.push("Q2", { className });
    }
  };

  // const selectedReading =
  //   "Q1: This is the first question. What is a heuristic evaluation?";
  console.log(questionList);
  console.log(className);
  console.log(questionList[className]);
  const selectedReading = questionList[className] || "";

  return (
    <View style={styles.container}>
      <View style={styles.both}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={onRateChange}
          defaultOption={defaultOption}
          placeholder={"Q1"}
          style={{
            zIndex: 999,
            justifyContent: "flex-end",
            marginLeft: -70,
            marginTop: 10,
          }}
          containerStyle={{
            position: "relative",
            width: 80,
            zIndex: 9999,
          }}
          dropDownContainerStyle={{
            //marginTop: -140,
            marginLeft: -70,
            marginTop: -50,
            zIndex: 9999,
          }}
          listItemContainerStyle={{ height: 30 }}
        />
        <Text style={styles.TitleText}>Q1</Text>
      </View>
      <Text style={styles.welcome}>Listen to Question</Text>
      <TextToSpeechAssn
        style={{ zIndex: 999 }}
        passedData={selectedReading}
      ></TextToSpeechAssn>
      <Text style={styles.welcome}>Record Answer</Text>
      <ScrollView style={styles.textbox}>
        {results.map((result, index) => (
          <Text key={`result-${index}`} style={styles.stat}>
            {result}
          </Text>
        ))}
      </ScrollView>
      <TouchableHighlight onPress={startRecognizing}>
        <Image
          style={styles.button}
          source={require("../../assets/Themes/microphone.png")}
        />
      </TouchableHighlight>
      <View style={styles.buttons}>
        <Pressable style={styles.test2} onPress={stopRecognizing}>
          <Text style={styles.test}>{"Cancel"}</Text>
        </Pressable>
        <Pressable
          style={styles.test2}
          onPress={() => destroyRecognizer(selectedReading)}
        >
          <Text style={styles.test}>{"Finish"}</Text>
        </Pressable>
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
    padding: 10,
    justifyContent: "center",
  },

  text: {
    fontSize: 20,
    fontFamily: "Arial",
    textAlign: "center",
    marginHorizontal: 15,
    marginVertical: 10,
    position: "relative",
  },
  TitleText: {
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 15,
    marginVertical: 10,
    textAlign: "center",
  },
  new: {
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: 1,
  },
  textbox: {
    backgroundColor: "#ededed",
    width: 380,
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
  both: {
    flexDirection: "row",
    marginEnd: 80,
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

export default Q1;
