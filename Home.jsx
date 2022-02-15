import React from "react"; // Import React itself
import { View, Text } from "react-native"; // Import specific components from react-native for View and Text

const Home = () => { // Actual Component that we'll call and use
  return <View><Text>Hello World</Text></View>; // The view itself
}

export default Home; // Same as module.exports; Exports the Home component and allows us to import it and use it elsewhere.