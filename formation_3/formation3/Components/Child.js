import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

function Child(props) {
    console.log(props);
    return (
        <View style={{backgroundColor:props.props.backgroundColor}}> 
            <Text> Je suis le fils du parent numéro {props.props.number}</Text> 
        </View>
    )
}

export default Child
