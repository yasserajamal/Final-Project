// Credit: https://www.youtube.com/watch?v=gPaBicMaib4

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import {
  Classes,
  UnderConstruction,
  Help,
  ViewConnectionsScreen,
  Connect,
  Notes,
  NotesOverview,
  NotesText,
  NotesNext,
} from "../utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ClassesStackNavigator from "../components/ClassesTabs";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

// entry point to the third navigator for classes
const ClassesScreens = () => {
  return <ClassesStackNavigator />;
};

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{ marginLeft: 10 }}
    >
      <MaterialIcons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};

// connect only navigator to allow going from the swiping page to the connections page
function ConnectStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Connecttab"
        component={Connect}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewConnectionsScreen"
        component={ViewConnectionsScreen}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
    </Stack.Navigator>
  );
}

function NoteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notetab"
        component={Notes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotesNext"
        component={NotesNext}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <Stack.Screen
        name="NotesScreen"
        component={NotesOverview}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <Stack.Screen
        name="NotesText"
        component={NotesText}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
    </Stack.Navigator>
  );
}

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false, // This hides the top header
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "bold",
          color: "grey",
        },
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarActiveTintColor: "black", // Color for the active tab
        tabBarInactiveTintColor: "gray", // Color for the inactive tab
      }}
    >
      <BottomTab.Screen
        name="Classes"
        component={ClassesScreens}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/icons/classes.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "black" : "grey",
                }}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "grey", fontSize: 16 }}>
              Classes
            </Text>
          ),
        }}
      />
      <BottomTab.Screen
        name="Recordings"
        component={NoteStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../assets/icons/quickRecord.png")}
              resizeMode="contain"
              style={{
                width: 35,
                height: 25,
                tintColor: focused ? "black" : "grey",
              }}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "grey", fontSize: 16 }}>
              Recordings
            </Text>
          ),
        }}
      />

      <BottomTab.Screen
        name="Connect"
        component={ConnectStack}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="message-text"
                size={24}
                color="black"
              />
            ) : (
              <MaterialCommunityIcons
                name="message-text-outline"
                size={24}
                color="black"
              />
            ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "grey", fontSize: 16 }}>
              Connect
            </Text>
          ),
        }}
      />

      <BottomTab.Screen
        name="Help"
        component={Help}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/icons/help.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "black" : "grey",
                }}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? "black" : "grey", fontSize: 16 }}>
              Help
            </Text>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
