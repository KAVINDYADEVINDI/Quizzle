import React from 'react';
import { StyleSheet, Text, View,Animated, TouchableOpacity,Image ,ImageBackground} from 'react-native';
import { LinearGradient } from "react-native-linear-gradient";
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
            <LinearGradient colors={['#43D4FF', '#38ABFD', '#2974FA']} style={styles.gradiant}>
              <Text style={styles.BtnText}>Get Start >></Text>
               </LinearGradient>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.HowPlayBtn}>
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
    marginLeft: 80,
    marginTop:300,
    width: "60%",
    padding: 15,
    backgroundColor: "#075e0b",
    borderRadius: 56,
  },
  gradient:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius:5,
  },
  BtnText: {
      fontSize:24,
      fontWeight:'300',
      color:'#fff',
    backgroundColor: 'transparent',
  },
  HowPlayBtn: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 80,
    marginTop:200,
    width: "60%",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 56,
  },
  HowPlayBtnText: {},
});