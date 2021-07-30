import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppHeader from "./components/AppHeader";
import Home from "./components/Home";
import ImageComponent from "./components/ImageComponent";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "AIM Order",
            headerStyle: styles.headerStyle,
            headerTintColor: styles.headerTintColor,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="ImageComponent"
          component={ImageComponent}
          options={{
            title: "Aim Image",
            headerStyle: styles.headerStyle,
            headerTintColor: styles.headerTintColor,
            headerTitleStyle: styles.headerTitleStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: 'yellow',
    alignItems: "center",
  },
  headerStyle: {
    backgroundColor: "#019edf",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
    color: "white",
    alignSelf: "center",
  },
});
