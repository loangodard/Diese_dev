import React from 'react'
import { Text, View } from 'react-native'
import Child from './Child'

function Parent(props) {
    return (
        <View style={{flexDirection: 'column', width: 120}}>
            <Text> Je suis la parent numéro {props.number}  </Text>
            <Child props={props} />
        </View>
    )
}

export default Parent
