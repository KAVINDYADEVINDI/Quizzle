import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./navigation";
import Quiz from "./screens/quiz";
import Result from "./screens/result";
import Welcome from "./screens/Welcome";

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
      <Welcome />
      {/* <Quiz/> */}
      {/* <Result/> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({});
