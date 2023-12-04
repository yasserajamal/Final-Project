import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Swiper from "react-native-deck-swiper";

const Data = [
  {
    id: "1",
    name: "Michael",
    bio: "Dad, Husband, Tech Founder",
    info: "Also taking: CS 147",
    image: require("../../assets/Connect/Michael.jpg"),
  },
  {
    id: "2",
    name: "Daniela",
    bio: "Public Health Student :)",
    image: require("../../assets/Connect/Daniela.jpg"),
  },

  {
    id: "3",
    name: "Emmanuel",
    bio: "Software Engineer going back to school",
    image: require("../../assets/Connect/Emmanuel.jpg"),
  },

  {
    id: "4",
    name: "Rica",
    bio: "I'm passionate about envionrmental sceince",
    info: "Also taking: PHIL 180",
    image: require("../../assets/Connect/Rica.jpg"),
  },

  {
    id: "5",
    name: "Eric",
    bio: "Educator diving into ed-tech",
    info: "Also taking: CS 147, MATH 51 ",
    image: require("../../assets/Connect/Eric.jpg"),
  },
];

const Card = ({ card }) => (
  <View style={styles.card}>
    <Image source={card.image} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{card.name}</Text>
    <Text style={styles.cardBio}>{card.bio}</Text>
    <Text style={styles.cardClassInfo}>{card.info}</Text>
  </View>
);

const Connect = () => {
  const [remainingConnections, setremainingConnections] = useState(true);
  const ViewConnections = () => {
    navigation.navigate("ViewConnectionsScreen");
  };
  const SwippedSkip = () => {
    return; // Stretch goal implement Tinder swipping effects for both swipping to connect and skipping
  };

  const SwippedConnect = (cardIndex) => {
    Alert.alert(
      "Connection Request Sent",
      `Your request to connect with ${Data[cardIndex].name} has been sent. If they accept, you can start messaging them directly in your connections page.`,
      [{ text: "OK" }],
      { cancelable: false }
    );
  };
  const onSwipedAllCards = () => {
    setremainingConnections(false);
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.TitleText}> CONNECT </Text>
      <Text style={styles.instructionText}>
        Swipe right to connect, left to skip
      </Text>
      {!remainingConnections && (
        <Text style={styles.noConnectionsLeftText}>
          Looks like you've seen everyone who wants to connect, check back soon
          for new connections
        </Text>
      )}
      <Swiper
        cards={Data}
        renderCard={(card) => <Card card={card} />}
        onSwipedLeft={SwippedSkip}
        onSwipedRight={SwippedConnect}
        onSwipedAll={onSwipedAllCards}
        cardIndex={0}
        backgroundColor={"transparent"}
        stackSize={3}
      />
      <TouchableOpacity
        onPress={ViewConnections}
        style={styles.viewConnectionsButton}
      >
        <Text style={styles.viewConnectionsButtonText}>View Connections</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  TitleText: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 15,
    marginVertical: 10,
    position: "relative",
  },
  viewConnectionsButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    position: "absolute",
    bottom: 70,
    left: 30,
    right: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  instructionText: {
    fontSize: 16,
    fontFamily: "Arial",
    color: "grey",
    marginHorizontal: 28,
    marginVertical: -10,
  },

  viewConnectionsButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  noConnectionsLeftText: {
    textAlign: "center",
    fontFamily: "Arial",
    marginVertical: 230,
    fontSize: 27,
    color: "grey",
  },
  card: {
    width: 400,
    height: 470,
    marginVertical: 40,
    marginHorizontal: -5,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "grey",
    justifyContent: "center",
    backgroundColor: "white",
  },
  cardImage: {
    width: "100%",
    height: 380,
    marginBottom: 80,
  },
  cardTitle: {
    fontSize: 27,
    fontWeight: "bold",
    fontFamily: "Arial",
    textAlign: "center",
    position: "relative",
    marginTop: -72,
  },
  cardBio: {
    fontSize: 20,
    color: "gray",
    fontWeight: "bold",
    fontFamily: "Arial",
    textAlign: "center",
  },
  cardClassInfo: {
    fontSize: 15,
    position: "relative",
    fontFamily: "Arial",
    margin: 10,
    marginBottom: 30,
  },
});

export default Connect;
