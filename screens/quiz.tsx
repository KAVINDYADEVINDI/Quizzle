import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Quiz=()=>{
    return (
       <View>
            <View>
                <Text>Question 1</Text>
            </View>

            <View>
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

            <View>
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

const styles= StyleSheet.create({});