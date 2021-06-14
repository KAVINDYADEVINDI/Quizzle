import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native';

const Quiz=()=>{
    return (
      <View style={styles.container}>
        <View style={styles.bannerContainer}>
          <Image
            source={require("../assets/images/wel.jpg")}
            style={styles.banner}
            resizeMode="contain"
          />
        </View>

        <View style={styles.top}>
          <Text>Question 1</Text>
        </View>

        <View style={styles.options}>
          <TouchableOpacity>
            <Text>Option 1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Option 2</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Option 3</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Option 4</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity>
            <Text>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: "100%,",
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    paddingVertical: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});