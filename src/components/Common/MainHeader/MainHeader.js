import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


export default function MainHeader() {
  const { container, headerText } = styles;
  return (
    <View style= {container}>
      <Image 
        source={{url: 'https://thewidlarzgroup.com/static/small-logo-5119c736ead17f3fda6a1c9068e28001.png'}}
        style={styles.image}
      />
      <Text style= {headerText}>
        Chat app
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText: {
    width: '100%',
    paddingVertical: 40,
    color: 'white',
    fontSize: 35,
    fontWeight: '700',
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 30,
  }
});