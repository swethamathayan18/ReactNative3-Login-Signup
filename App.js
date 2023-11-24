import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./screens/Login";
import SignUp from "./screens/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

