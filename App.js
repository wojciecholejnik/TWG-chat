import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import MainView from './src/components/Views/MainView/MainView';
import RoomView from './src/components/Views/RoomView/RoomView';

import { ApolloClient, InMemoryCache, gql, createHttpLink, ApolloProvider, useQuery } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import { token } from './token';

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphiql',
});

const authLink = setContext((_, { headers }) => {
  // // get the authentication token from local storage if it exists
  // const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2MTkxMTY1MTAsImlhdCI6MTYxNjY5NzMxMCwiaXNzIjoiY2hhdGx5IiwianRpIjoiOTg5Y2QzNDAtY2UzNC00YWMyLWEzZDYtMTAxYmNhZTVmNTZjIiwibmJmIjoxNjE2Njk3MzA5LCJzdWIiOiJhNWFjYTViMS01ZjI0LTQyZTYtYWQ3Ni04ODA1OGM5YWFiYzEiLCJ0eXAiOiJhY2Nlc3MifQ.zI9MX2ttpHf9ENjor2Qg7StQCV-g_80iNlH9x1E4GEOBXoi1DQnD0Lurl-ltM2chLVZO3lHCMdrYv6Gn9vTi3w';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default function App() {

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <Router>
          <Stack key='root'>
            <Scene key='main' component={MainView} title='TWG-Chat' />
            <Scene key='room' component={RoomView} title='Chat room' />
          </Stack>
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

