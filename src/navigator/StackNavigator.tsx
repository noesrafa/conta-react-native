import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/Onboarding';
import SetName from '../screens/SetName';

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={SetName} />
      <Stack.Screen name="SetName" component={SetName} />
    </Stack.Navigator>
  );
}

export default StackNavigator