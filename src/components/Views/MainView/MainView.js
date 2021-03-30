import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useQuery } from '@apollo/client';
import MainHeader from '../../Common/MainHeader/MainHeader'
import MainRooms from '../../Common/MainRooms/MainRooms';
import { settings } from '../../../settings';
import { GET_ROOMS } from '../../../queries';


export default function MainView  ({receivedToken}) {
  
  const { loading, error, data } = useQuery(GET_ROOMS, {pollInterval: 1000})

  if (loading) return <View style={styles.other}><ActivityIndicator size='large'/></View>;
  if (error) return <View style={styles.other}><Text>Error</Text></View>

  return (
    <View style={styles.container}>
      <MainHeader />
      <MainRooms rooms={data.usersRooms.rooms}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: settings.colors.headerBlue,
    width: '100%',
    height: '100%',
  },
  other: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});