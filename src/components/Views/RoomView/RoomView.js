import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useQuery } from '@apollo/client';
import { GET_ROOM_BY_ID } from '../../../queries';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';



export default function RoomView({id}) {

  const { loading, error, data } = useQuery(GET_ROOM_BY_ID(id))

  if (loading) return <View><Text>Loading</Text></View>;
  if (error) return <View><Text>Error</Text></View>

  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity
          onPress={Actions.main}
        >
          <Text style={styles.backText}>Back</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    width: '100%',
    height: '100%',
  },
  back: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  backText: {
    fontSize: 20,
    color: 'white',
  },
});