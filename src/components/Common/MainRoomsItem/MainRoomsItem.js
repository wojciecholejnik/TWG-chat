import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
// import { MESSAGE_ADDED_SUBSCRIPTION } from '../../../subscriptions';
// import { useSubscription } from '@apollo/client';

export default function MainRooms({icon, name, roomId}) {

  // const { data: { messageAdded }, loading } = useSubscription(
  //   MESSAGE_ADDED_SUBSCRIPTION,
  //   { variables: { roomId } }
  // );

  return (
      <View style={styles.roomContainer}>
        <Image 
          style= {styles.avatarIcon}
          source={{
            url: icon || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKytDZEvtbV-JAOMiLkowWIsDBlcc0obbgqZPOJWQtJX4WfnrSEw9I0iyCJd7DEd5peRo&usqp=CAU',
          }}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  roomContainer: {
    paddingTop: 30,
    paddingLeft: 30,
    flexDirection: 'row',
  },
  avatarIcon: {
    width: 60,
    height: 60,
    borderRadius: 60,
    margin: 5,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    paddingBottom: 5,
  }
});