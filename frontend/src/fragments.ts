import { gql } from "@apollo/client";

/*
Fragments in GraphQL are reusable units of logic that allow you to 
share common fields between different operations 
*/

export const GAME_FIELDS = gql`
  fragment GameFields on Game {
    id
    title
    platform
  }
`;
