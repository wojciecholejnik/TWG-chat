import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Message from '../Message/Message';
import Sender from '../Sender/Sender';

export default class RoomContent extends React.Component {
  
  state = {
    messages: this.props.messages,
    user: this.props.user,
  }

   componentDidMount(){
    this.setState({
      messages: this.props.messages,
      user: this.props.user,
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <ScrollView >
          {this.state.messages.map(message => (
            <Message key={message.id} message={message} userID={this.state.user.id}/>
          ))}
        </ScrollView>
        <Sender roomId={this.props.roomId}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 40,
    marginTop: 30,
    paddingTop: 40,
    paddingBottom: 70,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
  }
});