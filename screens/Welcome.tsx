import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image ,ImageBackground} from 'react-native';
import Title from '../components/title';

const Welcome = ({navigation}) => {
    return (
      <View style={{ width: "100%", height: "100%" }}>
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
          }}
          style={styles.backgroundImage}
        >
          <View>
            <Title />
            <View style={styles.bannerContainer}>
              <Image
                source={{
                  uri: "https://cdn3d.iconscout.com/3d/premium/thumb/question-mark-2891357-2409768@0.png",
                }}
                style={styles.banner}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity
              style={styles.Btn}
              onPress={() => navigation.navigate("Quiz")}
            >
              <Text style={styles.BtnText}>Get Start</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.HowPlayBtn}
              onPress={() => navigation.navigate("Quiz")}
            >
              <Text style={styles.HowPlayBtnText}>How to Play?</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
};

export default Welcome;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%", // or 'stretch'
  },
  Btn: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 10,
    backgroundColor: "#099910",
    borderRadius: 16,
  },
  BtnText: {},
  HowPlayBtn: {},
  HowPlayBtnText: {},
});