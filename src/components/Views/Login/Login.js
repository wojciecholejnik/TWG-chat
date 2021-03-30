import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Keyboard, ActivityIndicator } from 'react-native';
import { settings } from '../../../settings';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../mutations';
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from 'react-native-router-flux';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [done, setDone] = useState('nothing')

  const [loginUser, {loading, error, data}] = useMutation(LOGIN, {
    variables: {
      email: email,
      password: password,
    }
  })

  const saveToken = async () => {
    try {
      await AsyncStorage.setItem('receivedToken', data.loginUser.token)
      console.log('Token saved!')
    } catch (e) {
      console.log(e)
    }
  }

  if(loading){return <ActivityIndicator style={styles.other} size='large' />};
  if(done === 'ok'){return <View style={styles.other} ><Text>Logged</Text><ActivityIndicator sieze='largr'/></View>};

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <TextInput
          style={styles.input}
          placeholder='Email ...'
          placeholderTextColor='white'
          value={email}
          onChangeText={(value) => {
            setEmail(value); 
            }}
          />
        <TextInput
          style={styles.input}
          placeholder='Password ...'
          placeholderTextColor='white'
          secureTextEntry
          value={password}
          onChangeText={(value) => {
            setPassword(value); 
            }}
          />
        <View style={styles.buttonContainer}>
          <Icon
          style={styles.button}
          name='send'
          color='black'
          raised
          size={24}
          onPress={async () => {
            Keyboard.dismiss()
            await loginUser();
            setDone('ok');
            await setTimeout(()=>{
              Actions.main();
              setDone('nothing')
            }, 2000);
            saveToken();
          }}
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  inner: {
    width: '100%',
    height: 300,
    backgroundColor: settings.colors.headerBlue,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 80,
  },
  input: {
    width: '100%',
    height: 50,
    color: 'white',
    borderRadius: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    marginBottom: 20,

  },
  buttonContainer: {
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
  },
  other: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});