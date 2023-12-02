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
  UnderConstructionScreen,
  LogoutScreen,
} from "./utils";
import { CustomInput } from "./components";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabs from "./components/bottomTabs";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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
        name="Account"
        component={UnderConstructionScreen}
        options={{ headerTintColor: "black", headerTitle: "" }}
      />
      <Drawer.Screen
        name="Notifications"
        component={UnderConstructionScreen}
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
  //LogBox.ignoreAllLogs();
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
