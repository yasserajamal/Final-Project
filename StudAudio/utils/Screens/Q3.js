import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Pressable,
  ScrollView,
} from "react-native";
import TextToSpeechAssn from "./TextToSpeechAssn";
import Voice, { SpeechResultsEvent } from "@react-native-voice/voice";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Q3 extends Component {
  state = {
    results: [],
  };

  constructor(props) {
    super(props);
    Voice.onSpeechResults = this.onSpeechResults;
  }

  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }

  onSpeechResults = (e: SpeechResultsEvent) => {
    console.log("onSpeechResults: ", e);
    this.setState({
      results: e.value,
    });
  };

  _startRecognizing = async () => {
    this.setState({
      results: [],
    });

    try {
      await Voice.start("en-US");
    } catch (e) {
      console.error(e);
    }
  };

  _stopRecognizing = async () => {
    try {
      await Voice.stop();
      this.props.navigation.goBack();
    } catch (e) {
      console.error(e);
    }
  };

  _destroyRecognizer = async (selectedReading) => {
    try {
      await Voice.destroy();
      this.props.navigation.push("Q3Next", {
        noteContent: this.state.results,
        question: selectedReading,
      });
    } catch (e) {
      console.error(e);
    }
    this.setState({
      results: [],
    });
  };

  render() {
    const { navigation, route } = this.props;
    const selectedReading =
      "Q1: This is the first question. What is a primary color?";

    return (
      <View style={styles.container}>
        <Text style={styles.TitleText}>Q1</Text>
        <Text style={styles.welcome}>Listen to Question</Text>
        <TextToSpeechAssn
          style={{ zIndex: 999 }}
          passedData={selectedReading}
        ></TextToSpeechAssn>
        <Text style={styles.welcome}>Record Answer</Text>
        {/* <Text style={styles.instructions}>
          Press the microphone and start speaking.
        </Text> */}
        <ScrollView style={styles.textbox}>
          {this.state.results.map((result, index) => {
            return (
              <Text key={`result-${index}`} style={styles.stat}>
                {result}
              </Text>
            );
          })}
        </ScrollView>
        <TouchableHighlight onPress={this._startRecognizing}>
          <Image
            style={styles.button}
            source={require("../../assets/Themes/microphone.png")}
          />
        </TouchableHighlight>
        <View style={styles.buttons}>
          <Pressable style={styles.test2} onPress={this._stopRecognizing}>
            <Text style={styles.test}>{"Cancel"}</Text>
          </Pressable>
          <Pressable
            style={styles.test2}
            onPress={() => this._destroyRecognizer(selectedReading)}
          >
            <Text style={styles.test}>{"Finish"}</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    zindex: 5,
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

export default Q3;
