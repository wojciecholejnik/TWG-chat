import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { settings } from '../../../settings';

export default function Message({message, userID}) {
  const isMine = userID === message.user.id;
  
  return (
    <View style={isMine ? styles.myContainer : styles.container} key={message.id}>
      <View style={isMine ? styles.myWrapper : styles.wrapper}>
        <Image
          style={styles.avatar} 
          source={{
            url: message.user.profilePic || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKytDZEvtbV-JAOMiLkowWIsDBlcc0obbgqZPOJWQtJX4WfnrSEw9I0iyCJd7DEd5peRo&usqp=CAU',
          }}
        />
        <View style={isMine ? styles.myContent : styles.content}>
          <Text style={styles.contentText}>{message.body}</Text>
        </View>
      </View>
      <View style={isMine ? styles.myDate : styles.date}>
        <Text style={styles.dateText}>{message.insertedAt.slice(0, 10)}</Text>
        <Text style={styles.dateText}>{message.insertedAt.slice(11, 16)}</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  myContainer: {
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 20,
    margin: 5,
    marginBottom: 0,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  myWrapper: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  content: {
    width: 250,
    minHeight: 70,
    padding: 10,
    justifyContent: 'center',
    paddingLeft: 15,
    backgroundColor: settings.colors.receivedMessage,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
  },
  myContent: {
    width: 250,
    minHeight: 70,
    padding: 10,
    justifyContent: 'center',
    paddingLeft: 15,
    backgroundColor: settings.colors.myMessage,
    borderRadius: 20,
    borderBottomRightRadius: 0,
  },
  date: {
    alignItems: 'flex-end',
  },
  myDate: {
    alignItems: 'flex-start',
  },
  dateText: {
    fontSize: 10,
  }
});