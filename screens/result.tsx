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
        <View style={styles.centerBox}>
          {/*  <Text>{route.params.paramKey}</Text> */}
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
  centerBox:{
    width:'60%',
    height:'60%',
  },
});
