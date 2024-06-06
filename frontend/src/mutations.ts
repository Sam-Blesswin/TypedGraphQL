import { gql } from "@apollo/client";
import { GAME_FIELDS } from "./fragments";

export const ADD_GAME = gql`
  ${GAME_FIELDS}
  mutation AddGame($data: AddGameInput!) {
    addGame(data: $data) {
      ...GameFields
    }
  }
`;
