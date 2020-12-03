import React from 'react'
import {View,Image, Text,StyleSheet} from 'react-native'

import Pdp from './Pdp'

const Story = (props) => {
    return(
        <View style={styles.story}>
            <Pdp style={{width:60,height:60}} url={props.url}/>
            <Text style={{marginTop:5,fontSize:15,fontWeight:"400"}}>{props.user}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    story:{
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:20
    }
})

export default Story