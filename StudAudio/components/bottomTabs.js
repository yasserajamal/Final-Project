// Credit: https://www.youtube.com/watch?v=gPaBicMaib4

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image } from "react-native";
import {
    RecordingsScreen,
    Classes,
    Help,
  } from "../utils";

const BottomTab = createBottomTabNavigator();


const BottomTabs = () => {
    return (
        <BottomTab.Navigator
        screenOptions={{
          headerShown: false, // This hides the top header
          tabBarLabelStyle: {
            fontSize: 16, 
            fontWeight: 'bold',
            color: 'grey', 
          },
          tabBarStyle: {
            backgroundColor: 'white', 
          },
          tabBarActiveTintColor: 'black', // Color for the active tab
          tabBarInactiveTintColor: 'gray', // Color for the inactive tab
        }}
      >
         <BottomTab.Screen name="Help" component={Help} options={{
            tabBarIcon: ({focused}) =>(
                <View>
                    <Image source = {require('../assets/icons/help.png')}
                        resizeMode = 'contain'   
                        style={{ width: 25, height: 25, tintColor: focused ? 'black':'grey' }}
                    />
                </View>
            ),
            tabBarLabel: ({ focused}) => (
                <Text style={{ color: focused ? 'black' : 'grey', fontSize: 16}}>
                  Help
                </Text>
              ),
        }}  />
        <BottomTab.Screen name="Recordings" component={RecordingsScreen}
        options={{
            tabBarIcon:({focused}) => (
                <Image
                    source={require('../assets/icons/quickRecord.png')}
                    resizeMode = 'contain'   
                        style={{ width: 35, height: 25, tintColor: focused ? 'black':'grey' }}
                />
            ),
        }}
        
        />

        <BottomTab.Screen name="Classes" component={Classes} options={{
            tabBarIcon: ({focused}) =>(
                <View>
                    <Image source = {require('../assets/icons/classes.png')}
                        resizeMode = 'contain'   
                        style={{ width: 25, height: 25, tintColor: focused ? 'black':'grey' }}
                    />
                </View>
            ),
            tabBarLabel: ({ focused}) => (
                <Text style={{ color: focused ? 'black' : 'grey', fontSize: 16}}>
                  Classes
                </Text>
              ),
        }} />
        
       
     
      </BottomTab.Navigator>
    );
};








export default BottomTabs;