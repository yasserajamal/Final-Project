import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import {
  Classes,
  Notes,
  UnderConstructionScreen,
  Grades,
  Readings,
  SignInScreen,
  ClassesOverview,
  ReadingsOverview,
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
        name="Grades"
        component={Grades}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="NOTES"
        component={UnderConstructionScreen2}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
      />
      <classesStack.Screen
        name="Assignments"
        component={UnderConstructionScreen2}
        options={{ headerTitle: () => null, headerLeft: () => <BackButton /> }}
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
