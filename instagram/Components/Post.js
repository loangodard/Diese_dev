import React from 'react'
import {useState} from 'react'
import { View, Text, StyleSheet, Image,Dimensions, ImagePropTypes, TouchableOpacity } from 'react-native'

import { MaterialCommunityIcons,AntDesign, EvilIcons, Feather } from '@expo/vector-icons';

import Pdp from './Pdp'

export default function Post(props) {
    const windowWidth = Dimensions.get('window').width;

    const [isLiked, setIsLiked] = useState(false)

    var coeur = <AntDesign name="hearto" size={24} color="black" />

    if(isLiked){
        coeur = <AntDesign name="heart" size={24} color="#ed4956" />
    }

    return (
        <View style={styles.post}>

            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <View style={{flex:1,paddingLeft:5}}>
                        <Pdp style={{width:40,height:40}} url={props.profilPic}/>
                    </View>
                    <View style={{flex:2}}>
                        <Text style={{fontWeight:'600',marginLeft:10}}>{props.user}</Text>
                    </View>
                </View>
                <View style={styles.headerRight}>
                    <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
                </View>
            </View>

            <View style={{width:windowWidth,height:windowWidth}}>
                <Image style={{width:windowWidth,height:windowWidth}} source={{uri:props.postImage}}/>
            </View>

            <View style={styles.actions}>
                <View style={styles.actionsLeft}>
                <TouchableOpacity onPress={() => {setIsLiked(!isLiked)}}>
                    {coeur}
                </TouchableOpacity>
                    <EvilIcons name="comment" size={35} color="black"/>
                    <Feather name="send" size={24} color="black" />
                </View>
                <View style={styles.actionsRight}>
                <Feather name="bookmark" size={24} color="black" />
                </View>
            </View>

            <View style={styles.likes}>
                <Text style={{fontWeight:"600"}}>{props.likes} J'aime</Text>
            </View>

            <View style={styles.description}>
            <Text>
                <Text style={{fontWeight:"600"}}>{props.user}</Text>
                <Text> </Text>
                <Text>{props.post}</Text>
            </Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    post:{
        width:'100%',
        borderTopWidth:1,
        borderColor:'#D3D3D3',
        backgroundColor:'white',
        paddingVertical:3
    },
    header:{
        // borderWidth:2,
        borderColor:'yellow',
        flexDirection:'row',
        paddingVertical:3
    },
    headerLeft:{
        // borderWidth:1,
        borderColor:'salmon',
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    headerRight:{
        // borderWidth:1,
        borderColor:'cyan',
        flex:2,
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:7
    },
    actions:{
        width:'100%',
        // borderWidth:2,
        borderColor:'pink',
        paddingVertical:5,
        flexDirection:'row'
    },
    actionsLeft:{
        // borderWidth:1,
        borderColor:'salmon',
        flex:2,
        justifyContent:'space-around',
        alignItems:'center',
        flexDirection:'row'
    },
    actionsRight:{
        // borderWidth:1,
        borderColor:'cyan',
        flex:5,
        justifyContent:'center',
        alignItems:'flex-end',
        paddingRight:7
    },
    likes:{
        width:'100%',
        // borderWidth:2,
        borderColor:'purple',
        flexDirection:'row',
        paddingVertical:2,
        paddingLeft:8
    },
    description:{
        width:'100%',
        // borderWidth:2,
        borderColor:'blue',
        flexDirection:'row',
        paddingVertical:5,
        paddingHorizontal:8
    }
})
