import { gql } from '@apollo/client';

export const ROOM_SUBSCRIPTION = gql`
  subscription messageAdded(
    $roomID: String!
    ){
      messageAdded(
        roomId: roomId!
        ){ id }
    }
  }
`;
