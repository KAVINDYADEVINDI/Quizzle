import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Emoji from "react-native-emoji";

// const Result = ({route}) => {
const Result = () => {
 
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ImageBackground
        source={require("../assets/images/result.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          <View style={styles.centerBox}>
            {/* <Text>{route.params.paramKey}</Text> */}
            <Text>kavi</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerBox: {
    marginTop: "50%",
    width: "80%",
    height: "40%",
    paddingHorizontal: 20,
    backgroundColor: "#5d4666",
    opacity: 0.6,
    borderRadius: 30,
  },
});
