import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as Speech from "expo-speech";
import Slider from "@react-native-community/slider";
import { FontAwesome } from "@expo/vector-icons";

const TextToSpeech = ({ passedData }) => {
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentImage, setCurrentImage] = useState("pause");

  const speak = () => {
    Speech.stop();
    setIsSpeaking(true);
    setCurrentImage("pause");
    Speech.speak(passedData, {
      language: "en-GB",
      voice: "com.apple.ttsbundle.Daniel-compact",
      pitch: pitch,
      rate: rate,
    });
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      Speech.pause();
      setCurrentImage("play");
      setIsSpeaking(false);
    } else {
      Speech.resume();
      setCurrentImage("pause");
      setIsSpeaking(true);
    }
  };

  const refresh = () => {
    speak();
    setIsSpeaking(true);
    setCurrentImage("pause");
  };

  const onPitchChange = (value) => {
    setPitch(value);
  };

  const onRateChange = (value) => {
    setRate(value);
  };

  return (
    <View style={styles.container}>
      <Button color="black" style="button" title="Listen" onPress={speak} />
      <View style={styles.sliders}>
        <View style={styles.group}>
          <Text> Pitch </Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={2}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={onPitchChange}
            value={pitch}
          />
        </View>
        <View style={styles.group}>
          <Text>Speed</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={2}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={onRateChange}
            value={rate}
          />
        </View>
      </View>
      <View style={styles.buttons}>
        {currentImage === "play" && (
          <FontAwesome
            name="play"
            size={24}
            color="black"
            onPress={toggleSpeech}
          />
        )}
        {currentImage === "pause" && (
          <FontAwesome
            name="pause"
            size={24}
            color="black"
            onPress={toggleSpeech}
          />
        )}
        <FontAwesome name="refresh" size={24} color="black" onPress={refresh} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b5b4b0",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 12,
    paddingHorizontal: 10,
  },
  sliders: {
    flexDirection: "column",
    alignItems: "center",
  },
  group: {
    flexDirection: "row",
    alignItems: "center",
  },
  slider: {
    width: 200,
    height: 40,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 200,
  },
});
export default TextToSpeech;
