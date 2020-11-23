import React from 'react';
import { FlatList, StyleSheet, View, Text, TextInput } from 'react-native';
import Tweet from './Components/Tweet';
import Parent from './Components/Parent';

const DATA = require('./assets/tweets.json')

export default function App() {



  return (
    <View style={styles.style}>

      <FlatList 
        data = {DATA}
        renderItem = {
          (itemData) => {
            return (
              <Tweet tweet={itemData.item} />
            )
          }
        }
        />


      {/* <FlatList 
        // style = {}
        horizontal
        data = {DATA}
        renderItem = {(itemData) => {
          console.log(itemData)
          return(
            <Text> {itemData.item.title} </Text>
          )
        }}
      /> */}

      {/* <TextInput  onChangeText={ (text) => console.log('mon texte est devenu: ' + text) }  
       style={styles.textinput} placeholder='Cliquez ici pour rentrer du texte' />  */}

      {/* <Parent number={1}  backgroundColor={'blue'} />
      <Parent number={2} backgroundColor={'green'} />
      <Parent number={3}  backgroundColor={'red'} /> */}
 
    </View>
  );
}

const styles = StyleSheet.create({
  style :{
      marginTop: 200,
      marginLeft: 400,
      height: 500,
      width: 500,
      backgroundColor: 'red'


  },

  textinput: {
    backgroundColor:'white',
    height: 350,
    width: 500,
    alignSelf: 'center',
    marginLeft: 500
  }
})
