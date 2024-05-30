import { Arg, Query, Resolver } from "type-graphql";
import { Game } from "./game";
import { GameModel } from "model";

@Resolver(Game)
export class GameResolver {
  @Query(() => [Game])
  async getGames(): Promise<Game[]> {
    return await GameModel.find();
  }
  @Query(() => Game)
  async game(@Arg("id", () => String) _id: string): Promise<Game> {
    const game = await GameModel.findOne({ id: _id });
    if (!game) throw new Error("Game not found");
    return game;
  }
}
