// import { Game, Review, Author } from "./model.js";

// export const resolvers = {
//   Query: {
//     games: async () => {
//       return await Game.find();
//     },
//     reviews: async () => {
//       return await Review.find();
//     },
//     authors: async () => {
//       return await Author.find();
//     },
//     review: async (_, args) => {
//       return await Review.findOne({ id: args.id });
//     },
//     game: async (_, args) => {
//       return await Game.findOne({ id: args.id });
//     },
//     author: async (_, args) => {
//       return await Author.findOne({ id: args.id });
//     },
//   },
//   Game: {
//     reviews: async (parent) => {
//       return await Review.find({ game_id: parent.id });
//     },
//   },
//   Author: {
//     reviews: async (parent) => {
//       return await Review.find({ author_id: parent.id });
//     },
//   },
//   Review: {
//     game: async (parent) => {
//       return await Game.findOne({ id: parent.game_id });
//     },
//     author: async (parent) => {
//       return await Author.findOne({ id: parent.author_id });
//     },
//   },
//   Mutation: {
//     deleteGame: async (_, args) => {
//       await Game.deleteOne({ id: args.id });
//       return await Game.find();
//     },
//     addGame: async (_, args) => {
//       const game = new Game({
//         id: args.id,
//         title: args.title,
//         platform: args.platform,
//       });
//       await game.save();
//       return await Game.find();
//     },
//     updateGame: async (_, args) => {
//       await Game.updateOne(
//         { id: args.id },
//         { $set: { title: args.title, platform: args.platform } }
//       );
//       return await Game.findOne({ id: args.id });
//     },
//   },
// };
