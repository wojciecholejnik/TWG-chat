import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ROOM_BY_ID } from '../../../queries';
import RoomHeader from '../../Common/RoomHeader/RoomHeader';
import RoomContent from '../../Common/RoomContent/RoomContent';


export default function RoomView({id}) {
  
  const { loading, error, data } = useQuery(GET_ROOM_BY_ID(id), {pollInterval: 5000});

  if (loading) return <View style={styles.other}><ActivityIndicator size='large'/></View>;
  if (error) return <View style={styles.other}><Text>Error</Text></View>;

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <RoomHeader name={data.room.name} img={data.room.roomPic}/>
      <RoomContent messages={data.room.messages} user={data.room.user} roomId={data.room.id}/>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,

  },
  other: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});