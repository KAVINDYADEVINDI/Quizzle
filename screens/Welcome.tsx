import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import Title from '../components/title';

const Welcome=()=>{
    return (
        <View>
            <Title/>

            {/* <view>

            </view> */}
            <TouchableOpacity>
                <Text>Get Start</Text>
            </TouchableOpacity>
        </View>
        
    );
};

export default Welcome;

const styles= StyleSheet.create({});