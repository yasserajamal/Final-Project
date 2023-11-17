import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Pressable,
  FlatList,

} from 'react-native';

import {
  useCanvasAuth,
  useCanvasClasses,
} from "./utils";

export default function App() {
  const { token, getSpotifyAuth } = useCanvasAuth();
  const classes = useCanvasClasses(token);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
