import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

const mockUsers = [
  {
    email: 'annadoe@example.com',
    firstName: 'Anna',
    id: 1,
    lastName: 'Doe',
    profilePic: 'https://www.pngitem.com/pimgs/m/0-6243_user-profile-avatar-scalable-vector-graphics-icon-woman.png',
    role: 'user',
  },
  {
    email: 'johndoe@example.com',
    firstName: 'John',
    id: 2,
    lastName: 'Doe',
    profilePic: 'https://p.kindpng.com/picc/s/41-414998_shoulder-human-behavior-head-user-profile-avatar-icon.png',
    role: 'user',
  },
  {
    email: 'wojtekolejnik@example.com',
    firstName: 'Wojtek',
    id: 3,
    lastName: 'Olejnik',
    profilePic: 'https://p.kindpng.com/picc/s/22-224021_child-avatar-icon-flat-design-red-yellow-coffee.png',
    role: 'user',
  },
  {
    email: 'annadoe@example.com',
    firstName: 'Anna',
    id: 4,
    lastName: 'Doe',
    profilePic: 'https://p.kindpng.com/picc/s/75-754460_construction-avatar-hd-png-download.png',
    role: 'user',
  },
  {
    email: 'annadoe@example.com',
    firstName: 'Anna',
    id: 5,
    lastName: 'Doe',
    profilePic: 'https://p.kindpng.com/picc/s/78-786678_avatar-hd-png-download.png',
    role: 'user',
  },
  {
    email: 'annadoe@example.com',
    firstName: 'Anna',
    id: 6,
    lastName: 'Doe',
    profilePic: 'https://p.kindpng.com/picc/s/22-223986_gamer-icon-png-transparent-png.png',
    role: 'user',
  },
  {
    email: 'annadoe@example.com',
    firstName: 'Anna',
    id: 7,
    lastName: 'Doe',
    profilePic: 'https://p.kindpng.com/picc/s/124-1247870_black-hair-girl-happiness-female-avatar-icon-png.png',
    role: 'user',
  },
]

export default function MainUsers() {
  return (
    <ScrollView style= {styles.container} horizontal>
      {
        mockUsers.map(user => (
          <TouchableOpacity key={user.id}
            onPress={() => Actions.room}
          >
            <Image
              style= {styles.avatarIcon}
              source={{
                url: user.profilePic
              }}
            />
        </TouchableOpacity>
        ))
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft: 30,
    flexDirection: 'row',
    maxHeight: 110,
    overflow: 'hidden',
  },
  avatarIcon: {
    width: 60,
    height: 60,
    borderRadius: 60,
    margin: 10,
  }
});