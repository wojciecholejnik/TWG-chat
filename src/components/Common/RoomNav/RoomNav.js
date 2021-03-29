import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';



export default function RoomNav() {

  return (
    <View style={styles.back}>
      <TouchableOpacity
        onPress={Actions.main}
      >
        <Text style={styles.backText}>Back</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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