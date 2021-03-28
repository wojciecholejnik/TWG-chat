import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { settings } from '../../../settings';
import MainHeader from '../../Common/MainHeader/MainHeader'
// import MainUsers from '../../Common/MainUsers/MainUsers';
import MainRooms from '../../Common/MainRooms/MainRooms';
import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../../../queries';




export default function MainView() {

  const { loading, error, data } = useQuery(GET_ROOMS)

  if (loading) return <View><Text>Loading</Text></View>;
  if (error) return <View><Text>Error</Text></View>

  return (
    <View style={styles.container}>
      <MainHeader />
      {/* <MainUsers /> */}
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
});