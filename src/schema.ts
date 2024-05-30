// export const typeDefs = `#graphql
//   type Game {
//     id: ID!
//     title: String!
//     platform: [String!]!
//     reviews: [Review!]
//   }
//   type Review {
//     id: ID!
//     rating: Int!
//     content: String!
//     game: Game!
//     author: Author!
//   }
//   type Author {
//     id: ID!
//     name: String!
//     verified: Boolean!
//     reviews: [Review!]
//   }
//   type Query {
//     games: [Game]
//     game(id:ID!): Game
//     reviews: [Review]
//     review(id:ID!): Review
//     authors: [Author]
//     author(id:ID!): Author
//   }
//   type Mutation {
//     deleteGame(id:ID!): [Game]
//     addGame(id:ID!, title: String!, platform: [String!]!): [Game]
//     updateGame(id:ID!, title: String, platform: [String!]): Game
//   }
// `;

// //inbuilt graphql types: Int, Float, String, Boolean, ID
