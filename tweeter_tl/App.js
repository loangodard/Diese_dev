import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';

import Tweet from './Components/Tweet'
const tweets = require('./assets/tweets.json')

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Tweet /> */}
      <FlatList data={tweets} renderItem={(itemData) => {
        return(<Tweet tweet={itemData.item}/>)
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:50
  },
});
