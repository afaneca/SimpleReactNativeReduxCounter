import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


import CountDisplay from '../components/CountDisplay';


// functional component
const Counter = () => {
    return <View style={styles.container}><CountDisplay /></View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center"
    }
});

export default Counter;