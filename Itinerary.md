# Workshop Itinerary

## Setup

- Expo-cli
    - What is Expo?
        - React Native doesn't have a natural "OTA" or "Over the Air" update system. In order to debug and run our apps on our phones, we need to keep it plugged in. XCode does the same, as does Android Studio (I think). However, Expo allows us to have an embedded OTA system. This helps us run and debug our apps on our phones without having to always have our phones plugged in. There's also a benefit of being able to "publish" the app onto the expo servers, which allows others to test the app too. This doesn't really help with our ToDo list project, since it requires our backend server to work, but it's still useful.
        - You can be on the same network or on a different network, but I'd suggest being on the same network as your server.
    - Installing Expo
        - `npm install -g expo-cli`
    - Create account
        - Go to [website](https://expo.dev) and create an account
    - Login
        - `expo login`
- New Project
    - `expo init <project-name>`
        - Suggestion to use `blank` (not TypeScript)
    - Test launch to make sure it's working
    - `expo start`
- Project Imports
    - `@react-navigation/native`
        - Use info from guide
            - `npm install @react-navigation/native-stack`
            - `expo install react-native-screens react-native-safe-area-context`
        - Navigation between screens
    - `axios`
        - Handling requests; basically this is the API connection itself

## Start

- First screen
    - Home Screen
- Second screen
    - Simple Counter
        - `useState`
        - `TouchableOpacity, Text, View`
- Navigation
    - Simple Navigation
        - Go between `Home` and `Counter`
- Prep for backend connection
    - Constants
        - Use for API URL
            - Easy to change and call everywhere
        - `GET /api` and parse `message: "Welcome to the Todos API"`
        - Ensure `GET` request works
- Connect with navigation
    - Navigation Revisited
        - Add route to `Get`
        - Navigate to `Get` Screen

## Additional Notes

- The [Guide](https://reactnative.dev/docs/getting-started) and [API Reference](https://reactnative.dev/docs/accessibilityinfo) are both incredibly helpful
- For rendering lists, using a FlatList may help
- Class v Functional Components differ, generally we'll use Functional Components now as they're lighter weight.

## Questions?
