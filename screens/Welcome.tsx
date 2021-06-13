import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import Title from '../components/title';

const Welcome = () => {
    return (
        <View >
            <Title />
            <Image source={ {uri: 'https://images.unsplash.com/photo-1585543923016-c6ac4a980ff0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'} } 
            style={styles.backgroundImage}
                  
             />
            <View style={styles.bannerContainer}>
                <Image source={ {uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/question-mark-2891357-2409768@0.png'} } 
                    style={styles.banner}
                    resizeMode="contain"
                />
            </View>
            <TouchableOpacity>
                <Text>Get Start</Text>
            </TouchableOpacity>
        </View>

    );
};

export default Welcome;

const styles = StyleSheet.create({
    banner:{
        height:300,
        width:300,
    },
    bannerContainer:{
        justifyContent:'center',
        alignItems:'center',
        
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
      }
    
});