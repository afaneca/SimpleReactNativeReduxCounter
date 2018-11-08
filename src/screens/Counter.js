import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


import CountDisplay from '../components/CountDisplay';


// functional component
const Counter = () => {
    return <View><CountDisplay /></View>
}

export default Counter;