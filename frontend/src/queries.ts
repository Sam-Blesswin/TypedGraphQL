import { gql } from "@apollo/client";

export const GET_GAMES = gql`
  query GetGames {
    getGames {
      id
      platform
      title
    }
  }
`;

export const GET_GAME = gql`
  query GetGame($gameId: String!) {
    game(id: $gameId) {
      platform
      title
    }
  }
`;




