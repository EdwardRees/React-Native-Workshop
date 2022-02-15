import React, { useState } from "react"; // React imports, allows for useState and simple state system
import { View, Text, TouchableOpacity } from "react-native"; // React Native components

// Stateless component
const Counter = () => {
  const [counter, setCounter] = useState(0); // Allows for a simple state
  return ( // Actual components consolidated and returned
    <View>
      {/* Button component */}
      <TouchableOpacity onPress={() => setCounter(counter - 1)}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>{counter}</Text>
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Counter; // equivalent to module.exports