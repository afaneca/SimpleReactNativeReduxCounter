import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchValue, incrementValue, decrementValue } from "../actions";
import { Actions } from "react-native-router-flux";

class CountDisplay extends Component {

    componentDidMount(){
        this.props.fetchValue(); // Fetches initial value
    }
    render(){
              const { value } = this.props; // made possible by mapStateToProps (implemented below)

              return <View style={styles.container}>
                  <TouchableOpacity onPress={this.props.incrementValue}>
                    <Text style={styles.texto}>+1</Text>
                  </TouchableOpacity>
                  <Text style={styles.value}>{value}</Text>
                  <TouchableOpacity onPress={this.props.decrementValue}> 
                    <Text style={styles.texto}>-1</Text>
                  </TouchableOpacity>
                </View>;
            }
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
        /* justifyContent: "space-evenly", */
    },
    texto: {
        fontSize: 40,
        margin: 20
    },
    value: {
        fontSize: 100
    }
}); 



const mapStateToProps = (state) => {
    return { value: state.value.val };
}

export default connect(mapStateToProps, { fetchValue, incrementValue, decrementValue })(CountDisplay);