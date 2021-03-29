import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { ApolloProvider } from '@apollo/client';
import MainView from './src/components/Views/MainView/MainView';
import RoomView from './src/components/Views/RoomView/RoomView';
import Login from './src/components/Views/Login/Login';
import { getClient } from './src/settings';
// import { token } from './token';
import AsyncStorage from '@react-native-community/async-storage';



export default function App() {

  const [stateToken, setStateToken] = useState('');

  const aaatoken = async () => {
    try {
      const token = await AsyncStorage.getItem('receivedToken')
  
      if (token !== null) {
        console.log('hahaha, ', token);
        setStateToken(token);
      }
    } catch (e) {
      console.log(e)
    }
  };

  aaatoken();

  return (
    <ApolloProvider client={getClient(stateToken)}>
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

