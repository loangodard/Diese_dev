import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList,SafeAreaView } from 'react-native';

import Story from './Components/Story'
import Post from './Components/Post'

const data = require('./assets/insta.json')

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.stories}>
        <FlatList style={{marginLeft:10}} horizontal data={data} renderItem={(itemData) => <Story user={itemData.item.user} url={itemData.item.profilPic}/>} />
      </View>
      <View style={styles.posts}>
      <FlatList data={data} renderItem={(itemData) => {
          return(<Post
            profilPic={itemData.item.profilPic}
            user={itemData.item.user}
            postImage={itemData.item.image}
            likes={itemData.item.likes}
            post={itemData.item.post}
          />)
          } } />
      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stories:{
    height:'15%'
  },
  posts:{
    backgroundColor:'green',
    height:"85%"
  }
});
