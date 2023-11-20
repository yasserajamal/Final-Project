import React from 'react';
import { View, Text, FlatList,StyleSheet, TouchableOpacity, Image } from 'react-native';

const RecordingsScreen = ({ recordings }) => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recordings</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  recordingList: {
    flex: 1,
  },
  recordingItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recordingInfo: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  recordingTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 5,
  },
  recordingDuration: {
    fontSize: 14,
    color: '#666',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginLeft: 10,
  },
  actionIcon: {
    width: 24,
    height: 24,
    tintColor: '#007bff',
  },
});

export default RecordingsScreen;
