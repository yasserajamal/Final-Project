import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const ViewConnectionsScreen = () => {
  const numberOfConnections = 0; 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Connections</Text>
      <Text style={styles.subTitle}>{`${numberOfConnections} connections`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: 'grey',
    fontFamily: 'Arial',
  },
});

export default ViewConnectionsScreen;