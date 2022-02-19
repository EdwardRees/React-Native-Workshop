// Container for the actual Navigation
import { NavigationContainer } from "@react-navigation/native";

// Import the StackNavigator
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Can be @react-navigation/stack instead, changes createNativeStackNavigator to createStackNavigator
// Native Stack uses a more Native primitive navigation stack, rather than React-Native's default navigation stack, which the main difference comes from speed
import React from "react";

// Import the screens
import Home from "./views/Home";
import Counter from "./views/Counter";
import Get from "./views/Get";

// Create the Stack Navigator itself into a variable called Stack, this will actually give us a component of sorts
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Creates a container for all of our navigators
    <NavigationContainer>
      {/* Creates our Stack Navigator, a type of Navigator using the Stack. Types of Navigators are Stack, Drawer, Tab */}
      <Stack.Navigator>
        {/* [1] */}
        <Stack.Screen name="Home" component={Home} />
        {/* [2] Move to [1] */}
        <Stack.Screen name="Counter" component={Counter} />
        {/* [3] */}
        <Stack.Screen name="Get" component={Get} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
