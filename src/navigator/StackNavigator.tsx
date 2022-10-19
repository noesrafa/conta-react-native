import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/Onboarding';
import SetName from '../screens/SetName';
import HomeScreen from '../screens/HomeScreen';
import * as React from 'react';
import SearchScreen from '../screens/SearchScreen';


const Stack = createStackNavigator();
interface Props {
  initialRoute: string;
}

function StackNavigator({initialRoute}:Props) {

  console.log(initialRoute);
  

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={initialRoute}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="SetName" component={SetName} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator