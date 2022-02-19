import React from "react"; // Import React itself
import { View, Text, TouchableOpacity } from "react-native"; // Import specific components from react-native for View, Text, and TouchableOpacity
import { useNavigation } from "@react-navigation/native"; // Get access to navigation from importing in

const Home = () => {
  const navigation = useNavigation(); // Get access to navigation
  // Actual Component that we'll call and use

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Hello World</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Counter")}>
        <Text>Go to Counter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Get")}>
        <Text>Go to Get</Text>
      </TouchableOpacity>
    </View>
  ); // The view itself
};

export default Home; // Same as module.exports; Exports the Home component and allows us to import it and use it elsewhere.
