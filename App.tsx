import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Quiz from './screens/quiz';
import Result from './screens/result';
import Welcome from './screens/Welcome';

export default function App() {
  return (
    <ImageBackground source={ {uri: 'https://images.unsplash.com/photo-1582769923195-c6e60dc1d8dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80'} } 
    style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* <Welcome/> */}
        <Quiz/>
        {/* <Result/> */}
        {/* <StatusBar style="auto" /> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:60,
  },
  backgroundImage: {
    flex:1,
    resizeMode: 'cover', // or 'stretch'
  }
});
