import React, { useState } from "react"; // React imports, allows for useState and simple state system
import { View, Text, TouchableOpacity } from "react-native"; // React Native components

// Stateless component
const Counter = () => {
  const [counter, setCounter] = useState(0); // Allows for a simple state. Counter is the state, setCounter is the function to change the state
  return ( // Actual components consolidated and returned
    <View>
      {/* Button component, onPress handles action when pressed */}
      <TouchableOpacity onPress={() => setCounter(counter - 1)}>
        {/* Text within Button */}
        <Text>-</Text>
      </TouchableOpacity>
      {/* Text of Counter */}
      <Text>{counter}</Text>
      {/* Button component, onPress handles action when pressed */}
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <Text>+</Text>
      </TouchableOpacity>
      {/* Closing View tags */}
    </View>
  );
};

export default Counter; // equivalent to module.exports