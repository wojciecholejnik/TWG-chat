import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default function RoomView() {
  return (
    <View style={styles.container}>
      <Text>Room View</Text>
      <TouchableOpacity onPress={Actions.main}><Text>Go to main</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});