import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

const Tweet = (props) => {
    return (
        <View style={styles.style}>
            <View style={{flexDirection: 'row'}}>
                <Image style={{height: 60, width: 60, borderRadius: 60/2}} source={{uri: props.tweet.profilPic}}/>
                <View style={{marginLeft: 10}}>
                    <Text style={{marginBottom: 5}}> {props.tweet.user} </Text>
                    <Text> @{props.tweet.at}</Text>
                </View>
            </View>

            <View style={{marginTop: 20}}>

                <Text style={{fontSize: 20}}> {props.tweet.tweet} </Text>

            </View>

            <View style={{borderTopWidth:1, borderTopColor: 'light grey', marginTop:80}}>

                <Text> <Text style={{fontWeight: "bold"}}> {props.tweet.RT} </Text> Retweet  <Text style={{fontWeight: "bold"}}> {props.tweet.likes} </Text> J'aime </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    style : {
        margin: 10,
        padding: 10,
        backgroundColor: 'white'
    }
})


export default Tweet
