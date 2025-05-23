import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const welcome = () => {
    return(
        <View  >
            <Text style={styles.green} >WELCOME TO REACTNATIVE GUYS!</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    green:{
        color:'green'
 }
   
});
export default welcome;

