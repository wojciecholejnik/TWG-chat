import { useQuery, gql } from '@apollo/client';

export const GET_ROOMS = gql`
query {
  usersRooms {
    rooms {
      id, name, roomPic
    } 
  }
}
`;

export const GET_ROOM_BY_ID = id => { 
  return gql`
  query {
    room(id: ${JSON.stringify(id)}){
      id, name, roomPic, 
      messages {
        id, insertedAt, body, user {
          firstName, lastName, id, profilePic, role, email
        }
      }
      user {
        email, firstName, id, lastName, profilePic, role
      }
    }
  }
  `;
};


