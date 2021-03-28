import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { settings } from '../../../settings';


export default function MainView() {
  return (
    <View style={styles.container}>
      <Text>Main View</Text>
      <TouchableOpacity onPress={Actions.room}><Text>Go to room</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: settings.colors.headerBlue,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});