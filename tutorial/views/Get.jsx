import React, { useState, useEffect } from "react"; // important imports
import { View, Text } from "react-native"; // importing components
import axios from "axios"; // imports module that allows for requests
import { API } from "../constants"; // pull in the API from our constants

const Get = () => {
  const [message, setMessage] = useState(""); // Provides a simple state system
  useEffect(() => {
    // useEffect allows for a component to run on load/on mount
    axios // Axios is a library that allows for requests
      .get(`${API}`) // GET request to our API
      .then((res) => setMessage(res.data.message)) // Set the message to the response
      .catch((err) => console.error(err)); // Log any errors
  }, []);

  return (
    // Actual components consolidated and returned
    <View>
      {/* Message shown */}
      <Text>{message}</Text>
      {/* Closing View */}
    </View>
  );
};

export default Get; // again module.exports = Get;
