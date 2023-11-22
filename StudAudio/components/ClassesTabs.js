import { createStackNavigator } from '@react-navigation/stack';
import { Classes, UnderConstructionScreen } from '../utils';
const classesStack = createStackNavigator();

function ClassesStackNavigator() {
  return (
    <classesStack.Navigator>
      <classesStack.Screen name= "Classes" component={Classes}  options={{ headerShown: false}}/>
    </classesStack.Navigator>
  );
}

export default ClassesStackNavigator;