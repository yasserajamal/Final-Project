import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import {
  Classes,
  Notes,
  UnderConstructionScreen,
  Grades,
  Readings,
  Assignments,
  SignInScreen,
  ClassesOverview,
  ShareScreen,
  ReadingsOverview,
  NotesOverview,
  NotesText,
  Q1,
  Q2,
  Q3,
  Q4,
  NotesNext,
  Q1Next,
  Q2Next,
  Q3Next,
  Q4Next,
  ShareNote,
  UnderConstructionScreen2,
} from "../utils";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { TouchableOpacity } from "react-native";

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
const BackButtonClasses = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("AllClasses")}
      style={{ marginLeft: 10 }}
    >
      <MaterialIcons name="arrow-back" size={24} color="black" />
    </TouchableOpacity>
  );
};
// To rewire make changes to each component mainly for the ones set to UnderConstructionScreen2
const classesStack = createStackNavigator();
// Note: we add the BackButton to all screens exceot classes since its the main screen; we made a custom back button to get a button while getting rid of the title
function ClassesStackNavigator() {
  return (
    <classesStack.Navigator>
      <classesStack.Screen
        name="AllClasses"
        component={Classes}
        options={{ headerShown: false }}
      />
      <classesStack.Screen
        name="ClassesOverview"
        component={ClassesOverview}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="ReadingsOverview"
        component={ReadingsOverview}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="Q1"
        component={Q1}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="Q2"
        component={Q2}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="Q3"
        component={Q3}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="Q4"
        component={Q4}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="Q1Next"
        component={Q1Next}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="Q2Next"
        component={Q2Next}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="Q3Next"
        component={Q3Next}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="Q4Next"
        component={Q4Next}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="NotesOverview"
        component={NotesOverview}
        options={{
          headerTitle: () => null,
          headerLeft: () => <BackButtonClasses />,
        }}
      />
      <classesStack.Screen
        name="NotesText"
        component={NotesText}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="NotesNext"
        component={NotesNext}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="ShareNote"
        component={ShareNote}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="ShareScreen"
        component={ShareScreen}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="Grades"
        component={Grades}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="Notes"
        component={Notes}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="Assignments"
        component={Assignments}
        options={{
          headerTitle: () => null,
          headerLeft: () => <BackButtonClasses />,
        }}
      />
      <classesStack.Screen
        name="READINGS"
        component={Readings}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
    </classesStack.Navigator>
  );
}

export default ClassesStackNavigator;
