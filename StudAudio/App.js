import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  Pressable,
  FlatList,
  SafeAreaView,

} from 'react-native';

import {
  useCanvasAuth,
  useCanvasClasses,
  SignInScreen,
  
} from "./utils";

export default function App() {
  //const { token, getSpotifyAuth } = useCanvasAuth();
  //const classes = useCanvasClasses(); /*token*/
  return (
    <SafeAreaView style={styles.container}>
      <SignInScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
