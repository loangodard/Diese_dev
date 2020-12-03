import React from 'react'
import { View, Text,Image } from 'react-native'

const Pdp = (props) => {

    // props.style = {
    //     width:120,
    //     height:120
    // }
    // props.style.width =120
    const width = props.style.width

    const myStyle = {
        borderRadius:width/2
    }

    // {...props.style,...myStyle} = {
    //     width:120,
    //     height:120,
    //     borderRadius:120/2
    // }

    const bordureWidth = width+0.15*width

    const styleBordure = {
        borderWidth:2,
        width:bordureWidth,
        height:bordureWidth,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:bordureWidth/2,
        borderColor:'red'
    }

    return (
        <View>
            <View style={styleBordure}>
                <Image style={{...props.style,...myStyle}} source={{uri:props.url}}/>
            </View>
        </View>
    )
}


export default Pdp

