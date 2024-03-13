import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./components/Navigation";
import { useWindowDimensions } from "react-native";

export default function App() {
  const { height, width } = useWindowDimensions();

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
