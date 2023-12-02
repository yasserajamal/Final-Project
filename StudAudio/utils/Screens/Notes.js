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
import { withNavigation } from "@react-navigation/compat";
import AsyncStorage from "@react-native-async-storage/async-storage";

type Props = {};
type State = {
  results: string[],
  //noteCounter: number,
};

class Notes extends Component<Props, State> {
  state = {
    results: [],
    //noteCounter: 1,
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
      this.props.navigation.goBack();
    } catch (e) {
      console.error(e);
    }
  };

  _destroyRecognizer = async () => {
    try {
      await Voice.destroy();
      //await this._saveNote(this.state.noteCounter, this.state.results);
      this.props.navigation.push("NotesNext", {
        noteContent: this.state.results,
      });
    } catch (e) {
      console.error(e);
    }
    this.setState({
      results: [],
    });
  };

  _saveNote = async (noteNumber, noteText) => {
    try {
      const storedCount = await AsyncStorage.getItem("noteCounter");
      const curCount = storedCount ? parseInt(storedCount) : 1;
      await AsyncStorage.setItem("noteCounter", `${curCount + 1}`);

      await AsyncStorage.setItem(
        `Note ${curCount}`,
        JSON.stringify({
          noteNum: noteNumber,
          content: noteText,
        })
      );
      this.setState((prevState) => ({
        noteCounter: prevState.noteCounter + 1,
      }));

      console.log("Note saved successfully!");
    } catch (error) {
      console.error("Error saving note:", error);
    }
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
          <Pressable style={styles.new} onPress={this._destroyRecognizer}>
            <Text style={styles.finish}>{"FINISH"}</Text>
          </Pressable>
          <Pressable style={styles.new} onPress={this._stopRecognizing}>
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
    fontSize: 28,
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
