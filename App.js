import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { ApolloProvider } from '@apollo/client';
import MainView from './src/components/Views/MainView/MainView';
import RoomView from './src/components/Views/RoomView/RoomView';
import Login from './src/components/Views/Login/Login';
import { client } from './src/settings';


export default function App() {

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Router>
          <Scene key='root'>
            <Scene initial key='login' component={Login} title='Login'/>
            <Scene key='main' component={MainView} title='TWG-Chat' />
            <Scene key='room' component={RoomView} title='Chat room' back={true}/>
          </Scene>
        </Router>
      <StatusBar style="auto" />
    </View>
    </ApolloProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

