import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

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
            {/*  <Text>{route.params.paramKey}</Text> */}
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
  container:{
    
  }
  centerBox: {
    width: "80%",
    height: "40%",
    backgroundColor: "#727d78",
    
    marginVertical:60,
    marginHorizontal:40,
  },
});
