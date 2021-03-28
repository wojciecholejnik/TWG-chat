import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import MainView from './src/components/Views/MainView/MainView';
import RoomView from './src/components/Views/RoomView/RoomView';

// import MainLayout from './src/components/Layout/MainLayout'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Router>
        <Stack key='root'>
          <Scene key='main' component={MainView} title='TWG-Chat' />
          <Scene key='room' component={RoomView} title='Chat room' />
        </Stack>
      </Router>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

