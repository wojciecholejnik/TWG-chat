import { gql } from '@apollo/client';

export const SEND = gql`
  mutation sendMessage(
      $body: String!
      $roomId: String!
    ){
      sendMessage(body: $body, roomId: $roomId){
        body
      }
    }
`;

export const LOGIN = gql`
  mutation loginUser(
      $email: String!
      $password: String!
    ){
      loginUser(email: $email, password: $password){
        token
      }
    }
`;

