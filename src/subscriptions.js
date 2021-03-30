import { gql } from '@apollo/client';

export const MESSAGE_ADDED_SUBSCRIPTION = gql`
subscription messageAdded($roomId: roomId!) {
  messageAdded(roomId: $roomId) {
    id
  }
}
`;
