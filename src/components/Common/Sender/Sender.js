import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Keyboard } from 'react-native';
import { Icon } from 'react-native-elements'
import { settings } from '../../../settings';
import { SEND } from '../../../mutations';
import { useMutation } from '@apollo/client';

const Sender = ({roomId}) => {

  const [text, setText] = useState('');
  const [sendMessage] = useMutation(SEND, {
    variables: {
      body: text,
      roomId: roomId
    }
  })

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Type your message ...'
        scrollEnabled
        multiline
        value={text}
        clearButtonMode='always'
        onChangeText={(value) => {
          setText(value); 
          }}
        />
      <Icon 
        name='send'
        color={settings.colors.headerBlue}
        reverse
        raised
        size={20}
        onPress={() => {
          sendMessage();
          setText('');
          Keyboard.dismiss()
        }}
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: settings.colors.myMessage,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 30,
    paddingHorizontal: 20,
  },
  input: {
    maxWidth: '80%',
    height: 50,
  }
});

export default Sender