import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Message from '../Message/Message';

export default class RoomContent extends React.Component {
  
  state = {
    messages: this.props.messages,
    user: this.props.user,
  }

  render(){

    return (
      <ScrollView style={styles.container}>
        {this.state.messages.map(message => (
          <Message key={message.id} message={message} userID={this.state.user.id}/>
        ))}
      </ScrollView>
    );

  }

}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 40,
    marginTop: 30,
    paddingTop: 40,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
  }
});