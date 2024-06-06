import { gql } from "@apollo/client";
import { GAME_FIELDS } from "./fragments";

export const GET_GAMES = gql`
  ${GAME_FIELDS}
  query GetGames {
    getGames {
      ...GameFields
    }
  }
`;

export const GET_GAME = gql`
  ${GAME_FIELDS}
  query GetGame($gameId: String!) {
    game(id: $gameId) {
      ...GameFields
    }
  }
`;
