import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import * as Speech from "expo-speech";
import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

const TextToSpeech = ({ passedData }) => {
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [firstPlay, setPlay] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentImage, setCurrentImage] = useState("play");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "0.5x", value: 0.5 },
    { label: "1x", value: 1 },
    { label: "1.5x", value: 1.5 },
  ]);

  const defaultOption = 1;
  const speak = () => {
    Speech.stop();
    setIsSpeaking(true);
    setPlay(true);
    setCurrentImage("pause");
    Speech.speak(passedData, {
      language: "en-GB",
      voice: "com.apple.ttsbundle.Daniel-compact",
      pitch: pitch,
      rate: rate,
    });
  };
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        Speech.stop();
      };
    }, [])
  );
  useEffect(() => {
    if (firstPlay) {
      speak();
    }
  }, [rate]);

  const toggleSpeech = () => {
    if (!firstPlay) {
      speak();
    } else {
      if (isSpeaking) {
        Speech.pause();
        setCurrentImage("play");
        setIsSpeaking(false);
      } else {
        Speech.resume();
        setCurrentImage("pause");
        setIsSpeaking(true);
      }
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
    speak();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Listen </Text>
      <View style={styles.sliders}>
        <View style={styles.group}></View>
        <View style={styles.group}></View>
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
        <View style={styles.drop}>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={onRateChange}
            defaultOption={defaultOption}
            placeholder={"1x"}
            style={{ zIndex: 999 }}
            containerStyle={{
              position: "relative",
              zIndex: 999,
            }}
            dropDownContainerStyle={{
              marginTop: -140,
            }}
            listItemContainerStyle={{ height: 30 }}
          />
        </View>
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
    borderRadius: 10,
  },
  sliders: {
    flexDirection: "column",
    alignItems: "center",
  },
  group: {
    flexDirection: "row",
    alignItems: "center",
  },
  drop: {
    width: 100,
    height: 40,
    zIndex: 999,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 200,
    alignItems: "center",
    paddingBottom: 10,
  },
  text: {
    fontSize: 18,
    fontFamily: "Arial",
    textAlign: "center",
    marginHorizontal: 15,
    marginVertical: 10,
    position: "relative",
  },
});
export default TextToSpeech;
