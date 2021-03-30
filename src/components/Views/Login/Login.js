import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Keyboard, ActivityIndicator, Image } from 'react-native';
import { settings } from '../../../settings';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../mutations';
import { Icon } from 'react-native-elements';
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

  if(loading){return <ActivityIndicator style={styles.other} size='large' />};
  if(done === 'ok'){return <View style={styles.other} ><Text>Logged</Text><ActivityIndicator sieze='largr'/></View>};

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <Image 
            source={{url: 'https://thewidlarzgroup.com/static/small-logo-5119c736ead17f3fda6a1c9068e28001.png'}}
            style={styles.image}
          />
        </View>
      <View style={styles.inner}>
        
        <TextInput
          style={styles.input}
          placeholder='Email ...'
          placeholderTextColor='grey'
          value={email}
          onChangeText={(value) => {
            setEmail(value); 
            }}
          />
        <TextInput
          style={styles.input}
          placeholder='Password ...'
          placeholderTextColor='grey'
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
          color={settings.colors.headerBlue}
          reverse
          raised
          size={28}
          onPress={async () => {
            Keyboard.dismiss()
            await loginUser();
            setDone('ok');
            Actions.main();
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
    backgroundColor: settings.colors.headerBlue,

  },
  inner: {
    width: '100%',
    height: 300,
    backgroundColor: 'white',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 50,
  },
  input: {
    width: '100%',
    height: 50,
    color: 'black',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
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
  },
  imageContainer: {
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 70,
    height: 70,
    marginVertical: 20,
  }
});