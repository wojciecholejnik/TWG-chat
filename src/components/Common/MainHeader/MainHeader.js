import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function MainHeader() {
  const { container, headerText } = styles;
  return (
    <View style= {container}>
      <Text style= {headerText}>
        TWG Chat app
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
    width: '100%',
    paddingVertical: 40,
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
  }
});