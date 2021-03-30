import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MainRoomsItem from '../MainRoomsItem/MainRoomsItem';

export default function MainRooms({rooms}) {

  return (
    <ScrollView style= {styles.container}>
      {rooms.map(oneRoom => (
        <TouchableOpacity onPress={() => Actions.room({id: oneRoom.id})} key={oneRoom.id}>
          <MainRoomsItem icon={oneRoom.roomPic} name={oneRoom.name} roomId={oneRoom.id} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 40,
  },
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
  }
});