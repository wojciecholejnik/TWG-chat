import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';



export default function RoomHeader({name}) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: 140,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 70,
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
  }
});