import { buildSchema } from "type-graphql";
import { AuthorResolver } from "./author/author.resolver";
import { GameResolver } from "game/game.resolver";
import { ReviewResolver } from "review/review.resolver";

export const getSchema = async () => {
  return await buildSchema({
    resolvers: [AuthorResolver, GameResolver, ReviewResolver],
  });
};
