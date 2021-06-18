import React  from "react";
import { StyleSheet, Text, View, ImageBackground, Button ,Image} from "react-native";

import ConfettiCannon from "react-native-confetti-cannon";
import { useState } from "react";

// const Result = ({route}) => {
const Result = () => {
  const [state,setState]=useState("false");

 const  _handlePress=()=> {
    //To fire the cannon again. You can make your own logic here
      setState( "true" );
    setTimeout(() => {
      setState("true ");
    }, 10000);
  }
  console.log(state);
 
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <ImageBackground
        source={require("../assets/images/result.jpg")}
        style={styles.backgroundImage}
      >
        <View style={styles.Container}>
          <View style={styles.cardLayoutView}>
            <Text style={styles.paragraphHeading}>Congratulation!!</Text>
            <Text style={styles.paragraph}>
              You have recieved 500 Rs Cashback
            </Text>
            <Image
              style={styles.logo}
              source={{ uri: "asset:/images/k.png" }}
            />
            <Button
              onPress={_handlePress}
              title="Claim Now"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>

          {state == "true" ? (
            <ConfettiCannon
              count={200}
              explosionSpeed={350}
              origin={{ x: -10, y: 10 }}
            />
          ) : null}
        </View>
      </ImageBackground>
    </View>

    // <View style={{ width: "100%", height: "100%" }}>
    //   <ImageBackground
    //     source={require("../assets/images/result.jpg")}
    //     style={styles.backgroundImage}
    //   >
    //     <View style={styles.container}>
    //       <View style={styles.centerBox}>
    //         <Emoji name="face" style={{ fontSize: 50 }} />
    //         {/* <Text>{route.params.paramKey}</Text> */}
    //         <Text>kavi</Text>
    //       </View>
    //     </View>
    //   </ImageBackground>
    // </View>
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
    resizeMode: "contain",
  },
  cardLayoutView: {
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff9c4",
  },
  paragraphHeading: {
    margin: 24,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "green",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "center",
  },
  logo: {
    height: 130,
    width: 130,
    marginBottom: 20,
  },
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
