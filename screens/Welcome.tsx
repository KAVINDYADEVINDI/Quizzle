import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import Title from '../components/title';

const Welcome = () => {
    return (
        <View >
            <Title />
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
  
    
});