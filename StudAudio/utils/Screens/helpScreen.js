import React from "react"; // Import React
import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
// Credit: https://blog.logrocket.com/building-react-native-collapsible-accordions/
const Accordion = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setExpanded(!expanded)}
      >
        <View style={styles.headerContent}>
          <Icon
            name={expanded ? "keyboard-arrow-left" : "keyboard-arrow-right"}
            size={24}
            color="#000" 
          />
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </TouchableOpacity>
      {expanded && <View style={styles.content}>{children}</View>}
    </View>
  );
};
const Help = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcomeText}>FAQ</Text>
      <Accordion title="What is StudAudio?">
        <Text style={styles.textContent}>
        Studaudio is your gateway to flexible learning on the go! Effortlessly connect with 
        your class assignments, convert readings into audio for convenient listening, and 
        quickly record and share notes with fellow returning adult students. Experience a 
        seamless blend of convenience and collaboration at Studaudio, empowering you in 
        your educational journey.
        </Text>
      </Accordion>
      <Accordion title="How do I reset my password?">
        <Text style={styles.textContent}>
        To reset your password, please log out of your account and go to the sign-in page. There, click on the "Forgot Password" button. 
        Follow the instructions to submit the needed information, and you will receive an email with steps to create a new password.
        </Text>
      </Accordion>
      <Accordion title="Is StuAudio free?">
        <Text style={styles.textContent}>
        Yes, StudAudio is completely free to use. We firmly believe that adult learners should have easy and unhindered access to resources 
        that facilitate their transition back to school. Education is a powerful tool for personal and professional development, and we are 
        committed to ensuring that cost is not a barrier for learners seeking to enhance their skills and knowledge. By offering StudAudio for free,
         we aim to support your educational journey and provide you with the tools you need to succeed in your learning endeavors.
        </Text>
      </Accordion>
      <Accordion title="How can I get technical support?">
        <Text style={styles.textContent}>
        If you require technical support for StudAudio, 
        we are here to assist you. You can reach out to our support team in several ways:
        Email: Send us an email detailing your issue or query to support@studaudio.com. 
        Our team will get back to you as soon as possible with a solution.Online Contact Form: 
        Visit our website and fill out the contact form available in the 'Support' or 'Contact Us' section. 
        Be sure to provide as much detail as possible about your issue. FAQs and Troubleshooting
         Guides: We also recommend checking our Frequently Asked Questions and troubleshooting guides available 
         on the app and our website. These resources often provide immediate answers and solutions to common issues.
        </Text>
      </Accordion>
      <Accordion title="Can I suggest new features for StudAudio?">
        <Text style={styles.textContent}>
        Of course! We extremely value user feedback and suggestions.
        Your input helps us improve and evolve. 
        Please, feel free to submit your ideas by contacting us directly. 
        
        
        </Text>
      </Accordion>
      <Accordion title="Does StudAudio accommodate different learning styles?">
        <Text style={styles.textContent}>
        StudAudio is designed with diverse learning styles in mind. 
        It offers various formats of educational content, including audio lessons, 
        visual aids, and interactive modules to cater to different preferences.
        </Text>
      </Accordion>
      <Accordion title="Can I use StudAudio on multiple  devices?">
        <Text style={styles.textContent}>
        Currently, StudAudio does not support multi-device usage. 
        Each account is limited to use on a single device to ensure data security and integrity. 
        We understand the convenience of accessing courses and materials across various devices
        and are considering implementing this feature in future updates. 
        We recommend choosing your primary device for the best learning experience with StudAudio.
        </Text>
      </Accordion>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor: 'white',
},

  welcomeText: {
    fontSize: 60,
    fontWeight: "bold",
    fontFamily: "Georgia",
    marginHorizontal: 20,
    marginVertical: 10,
    position: 'relative',
  },
  text: {
    fontSize: 15,
    fontWeight: "light",
    fontFamily: "Georgia",
  },
  header: {
    padding: 15,
    backgroundColor: "white",
    borderColor: "white",
  },
  headerText: { // style for the questions
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily:'Arial',
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  content: {
    padding: 0,
  },
  textContent: { // style for the answers
    fontSize: 20,
    color: "black",
    fontFamily:'Arial',
    paddingLeft: 10,

  },
});

export default Help;
