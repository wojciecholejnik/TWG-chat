import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function MainHeader() {
  const { container, headerText } = styles;
  return (
    <View style= {container}>
      <Text style= {headerText}>
        Chat with your friends
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingBottom: 20,
    width: '100%',
    height: 'auto',
  },
  headerText: {
    width: '55%',
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
  }
});