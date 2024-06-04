import {
  Arg,
  AuthenticationError,
  Ctx,
  Field,
  ID,
  InputType,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { Game } from "./game";
import { GameModel } from "model";
import { MyContext } from "app";

//! - required
//? - optional

@InputType()
class UpdateGameInput {
  @Field({ nullable: true })
  title?: String;
  @Field(() => [String], { nullable: true })
  platform?: string[];
}

@InputType()
class AddGameInput {
  @Field(() => ID)
  id!: String;

  @Field()
  title!: string;

  @Field(() => [String])
  platform!: string[];
}

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

  @Mutation(() => [Game])
  async deleteGame(
    @Arg("Id", () => String) _id: string,
    @Ctx() ctx: MyContext
  ): Promise<Game[]> {
    console.log(ctx);
    if (ctx.token !== "admin") {
      throw new AuthenticationError("Authentication Failed");
    }
    await GameModel.deleteOne({ id: _id });
    return await GameModel.find();
  }

  @Mutation(() => [Game])
  async addGame(
    @Arg("data", () => AddGameInput) game: AddGameInput,
    @Ctx() ctx: MyContext
  ): Promise<Game[]> {
    if (ctx.token !== "admin") {
      throw new AuthenticationError("Authentication Failed");
    }
    const newGame = new GameModel(game);
    await newGame.save();
    return GameModel.find();
  }

  @Mutation(() => [Game])
  async updateGame(
    @Arg("Id", () => String) _id: String,
    @Arg("data") game: UpdateGameInput,
    @Ctx() ctx: MyContext
  ): Promise<Game[]> {
    if (ctx.token !== "admin") {
      throw new AuthenticationError("Authentication Failed");
    }
    await GameModel.updateOne(
      { id: _id },
      { $set: { title: game.title, platform: game.platform } }
    );
    return GameModel.find();
  }
}
