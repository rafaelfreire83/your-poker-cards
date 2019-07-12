import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { general } from './app/styles';
import Header from './app/components/Header';

export default function App() {
  return (
    <View style={ styles.container }>
      <Header />
      <Text style={ styles.container }> Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ...general
});
