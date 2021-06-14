import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Quiz from "../screens/quiz";
import Result from "../screens/result";
import Welcome from "../screens/Welcome";

const Stack = createStackNavigator();

function MyStack() {
  return (
    
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    
  );
}

export default MyStack;
