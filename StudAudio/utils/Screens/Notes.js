import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  Pressable,
  ScrollView,
} from "react-native";

import Voice, { SpeechResultsEvent } from "@react-native-voice/voice";

type Props = {};
type State = {
  results: string[],
};

class Notes extends Component<Props, State> {
  state = {
    results: [],
  };

  constructor(props: Props) {
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
    } catch (e) {
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
    } catch (e) {
      console.error(e);
    }
    this.setState({
      results: [],
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>New Voice Recording</Text>
        <Text style={styles.instructions}>
          Press the microphone and start speaking.
        </Text>
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
          <Pressable style={styles.new} onPress={this._stopRecognizing}>
            <Text style={styles.finish}>{"FINISH"}</Text>
          </Pressable>
          <Pressable style={styles.new} onPress={this._destroyRecognizer}>
            <Text style={styles.cancel}>{"CANCEL"}</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

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
  cancel: {
    color: "red",
    fontFamily: "Arial",
  },
  finish: {
    color: "black",
    fontFamily: "Arial",
  },
  new: {
    padding: 10,
    backgroundColor: "#ededed",
    margin: 15,
    width: 85,
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
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontFamily: "Arial",
    fontWeight: "bold",
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    fontFamily: "Arial",
    fontSize: 15,
  },
  stat: {
    textAlign: "center",
    color: "black",
    marginBottom: 1,
    fontSize: 15,
    fontFamily: "Arial",
  },
});

export default Notes;
