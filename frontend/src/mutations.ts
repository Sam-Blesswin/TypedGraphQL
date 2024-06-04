import { gql } from "@apollo/client";

export const ADD_GAME = gql`
  mutation AddGame($data: AddGameInput!) {
    addGame(data: $data) {
      id
      title
      platform
    }
  }
`;
