import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useQuery } from '@apollo/client';
import { GET_ROOM_BY_ID } from '../../../queries';
import RoomNav from '../../Common/RoomNav/RoomNav';
import RoomHeader from '../../Common/RoomHeader/RoomHeader';
import RoomContent from '../../Common/RoomContent/RoomContent';



export default function RoomView({id}) {

  const { loading, error, data } = useQuery(GET_ROOM_BY_ID(id))

  if (loading) return <View><Text>Loading</Text></View>;
  if (error) return <View><Text>Error</Text></View>


  return (
    <View style={styles.container}>
      <RoomNav />
      <RoomHeader name={data.room.name} />
      <RoomContent messages={data.room.messages} user={data.room.user} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '100%',
    height: '100%',
  },
});