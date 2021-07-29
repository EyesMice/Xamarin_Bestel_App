import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AppButtons from './components/AppButtons';
import AppHeader from './components/AppHeader';


export default function App() {
  return (
      <View style={styles.container}>
        <AppHeader/>
          <View style={styles.body}>
            <Text>Content goes here</Text>
          </View>
        <AppButtons/>      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  backgroundColor: 'yellow',
     alignItems: 'center'
  },
  body:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
