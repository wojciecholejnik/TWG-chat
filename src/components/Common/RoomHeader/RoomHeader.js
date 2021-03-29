import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';



export default function RoomHeader({name, img}) {

  return (
    <View style={styles.container}>
      <Image 
        source= {
          {
            url: img || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKytDZEvtbV-JAOMiLkowWIsDBlcc0obbgqZPOJWQtJX4WfnrSEw9I0iyCJd7DEd5peRo&usqp=CAU',
          }
        }
        style={styles.image}
      />
      <Text style={styles.text}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 70,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    // flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    maxWidth: '85%',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
  }
});