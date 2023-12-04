import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import * as Speech from "expo-speech";
import Slider from "@react-native-community/slider";
import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

const TextToSpeechAssn = ({ passedData }) => {
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [firstPlay, setPlay] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentImage, setCurrentImage] = useState("play");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "0.5x", value: 0.5 },
    //{ label: "0.75x", value: 0.75 },
    { label: "1x", value: 1 },
    { label: "1.5x", value: 1.5 },
    //{ label: "2x", value: 2 },
  ]);

  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];

  const defaultOption = 1;

  //console.log(passedData);
  const speak = () => {
    Speech.stop();
    setIsSpeaking(true);
    setPlay(true);
    setCurrentImage("pause");
    Speech.speak(passedData, {
      language: "en-GB",
      voice: "com.apple.ttsbundle.Daniel-compact",
      pitch: pitch,
      rate: value,
      onDone: () => {
        console.log("onDone callback executed");
        setPlay(false);
        setIsSpeaking(false);
        setCurrentImage("play");
      },
    });
  };
  // temp play buttin for first Pressable, hidden after
  useFocusEffect(
    React.useCallback(() => {
      // This function will be called when the component gains focus
      return () => {
        // This function will be called when the component loses focus
        Speech.stop();
      };
    }, [])
  );

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
    console.log(value);
    console.log(rate);
    speak();
  };

  return (
    <View style={styles.container}>
      <Button color="black" style="button" title={passedData} onPress={speak} />
      <View style={styles.sliders}>
        <View style={styles.group}>
          {/* <Text style={styles.text}> Pitch </Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={2}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={onPitchChange}
            value={pitch}
          /> */}
        </View>
        <View style={styles.group}>
          {/* <Text style={styles.text}>Speed</Text>
          <Slider
            style={{ width: 200, height: 40 }}
            minimumValue={0}
            maximumValue={2}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            onValueChange={onRateChange}
            value={rate}
          /> */}
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
            // onSelectItem={(item) => {
            //   setRate(item.value);
            //   onRateChange(item.value);
            // }}
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
    backgroundColor: "#ededed",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 12,
    paddingHorizontal: 10,
    width: 380,
    margin: 7,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
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
export default TextToSpeechAssn;
