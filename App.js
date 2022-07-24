import * as React from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
const uri = 'https://bzozoo.github.io/VUE-ToDo-Panel/';

export default function App() {
  return (
    <>
      <View style={styles.statusbar}></View>
      <WebView style={styles.container} source={{ uri }} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: Constants.statusBarHeight,
  },
  statusbar: {
    backgroundColor: '#4caf50',
    height: Constants.statusBarHeight+3
  },
});
