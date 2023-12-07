import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  LogBox,
} from "react-native";
import { useState } from "react";
import {
  SignInScreen,
  SignUpScreen,
  ForgotPassword,
  ResetPassword,
  Classes,
  Readings,
  Help,
  LogoutScreen,
} from "./utils";
import { CustomInput } from "./components";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "./components/bottomTabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const setDefaultNotes = async () => {
  try {
    await AsyncStorage.setItem(
      "ASSIGNMENT 1",
      JSON.stringify({ content: "Q1", date: "12/05/23" })
    );
    await AsyncStorage.setItem(
      "ASSIGNMENT 2",
      JSON.stringify({ content: "Q3", date: "12/11/23" })
    );
    await AsyncStorage.setItem(
      "Assignment 0 Submitted",
      JSON.stringify({ content: "ASSIGNMENT 0" })
    );
    await AsyncStorage.removeItem("Assignment 1 Submitted");
    await AsyncStorage.removeItem("Assignment 2 Submitted");
    // await AsyncStorage.removeItem("noteCounter");
  } catch (error) {
    console.error("Error editing note name:", error);
  }
};
// TODO: update logout to be triggered by the activity indicator instead
function HamBurger({ setIsAuthenticated }) {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          Color: "black",
        },
        drawerLabelStyle: {
          fontSize: 18,
        },
        drawerActiveTintColor: "black",
        drawerInactiveTintColor: "gray",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{ headerTintColor: "black", headerTitle: "" }}
      />
      <Drawer.Screen
        name="Log Out"
        component={LogoutScreen}
        initialParams={{ setIsAuthenticated }}
        options={{ headerTintColor: "black", headerTitle: "" }}
      />
    </Drawer.Navigator>
  );
}

// The following function is the navigator for all the screens before the user signs in
function AuthStack({ setIsAuthenticated }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign In"
        component={SignInScreen}
        initialParams={{ setIsAuthenticated }}
      />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Forgot Password" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

// We continously pass setIsAuthenticated to switch the navigators
function AppStacks({ setIsAuthenticated }) {
  return <HamBurger setIsAuthenticated={setIsAuthenticated} />;
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  LogBox.ignoreAllLogs();
  setDefaultNotes();
  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppStacks setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <AuthStack setIsAuthenticated={setIsAuthenticated} />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
