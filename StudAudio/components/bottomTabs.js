// Credit: https://www.youtube.com/watch?v=gPaBicMaib4

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from "react-native";
import { RecordingsScreen, Classes, Help, UnderConstructionScreen } from "../utils";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ClassesStackNavigator from "../components/ClassesTabs";
const BottomTab = createBottomTabNavigator();



const ClassesScreens = () => {
  return <ClassesStackNavigator/>;
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
        component={RecordingsScreen}
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
        component={UnderConstructionScreen}
        options={{
            tabBarIcon: ({ focused }) => (
              focused 
                ? <MaterialCommunityIcons name="message-text" size={24} color="black" />
                : <MaterialCommunityIcons name="message-text-outline" size={24} color="black" />
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
