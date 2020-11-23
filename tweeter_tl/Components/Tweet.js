import React from 'react'
import {View,StyleSheet,Text, Image} from 'react-native'

const Tweet = (props) => {

    var imageStyle = {}

    if(props.tweet.image != ""){
        imageStyle = {width:'75%',height:300,borderRadius:5}
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Image style={{width:60,height:60,borderRadius:30,marginLeft:10}} source={{uri:props.tweet.profilPic}}/>
                </View>
                <View style={{marginLeft:15}}>
                    <Text style={{fontSize:20}}>{props.tweet.user}</Text>
                    <Text style={{fontSize:15, color:'grey'}}>@{props.tweet.at}</Text>
                </View>
            </View>
            <View style={{marginVertical:15,marginLeft:10}}>
                <Text style={{fontSize:20}}>
                {props.tweet.tweet}
                </Text>
                <View style={{alignItems:'center',marginTop:10}}>
                    <Image style={imageStyle} source={{uri:props.tweet.image}}/>
                </View>
            </View>
            <View style={{marginLeft:10,borderTopColor:'grey',borderTopWidth:1}}>
                <Text style={{fontSize:15,marginTop:5}}>{props.tweet.RT} <Text style={styles.carac}>Retweets</Text> {props.tweet.likes} <Text style={styles.carac}>J'aimes</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:10
    },
    header:{
        flexDirection:'row'
    },
    carac:{
        color:'grey'
    }
})

export default Tweet