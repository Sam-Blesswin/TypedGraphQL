import { Arg, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Review } from "./review";
import { AuthorModel, GameModel, ReviewModel } from "model";
import { Game } from "game/game";
import { Author } from "author/author";

interface ReviewResponse {
  id: string;
  rating: number;
  content: string;
  author_id: string;
  game_id: string;
}

@Resolver(Review)
export class ReviewResolver {
  @Query(() => [Review])
  async getReviews(): Promise<Review[]> {
    return await ReviewModel.find();
  }

  @Query(() => Review)
  async review(@Arg("Id", () => String) _id: String): Promise<ReviewResponse> {
    const review = await ReviewModel.findOne({ id: _id });
    if (!review) throw new Error("Review Not Found");
    return review;
  }

  @FieldResolver(() => Game)
  async game(@Root() review: ReviewResponse): Promise<Game> {
    const game = await GameModel.findOne({ id: review.game_id });
    if (!game) throw new Error("No game matched with review");
    return game;
  }

  @FieldResolver(() => Author)
  async author(@Root() review: ReviewResponse): Promise<Author> {
    const author = await AuthorModel.findOne({ id: review.author_id });
    if (!author) throw new Error("No author matched with review");
    return author;
  }
}

//This works well when there are 2 - 3 args
// @ArgsType()
// class GetRecipesArgs {
//   @Field(type => Int, { nullable: true })
//   skip?: number;

//   @Field(type => Int, { nullable: true })
//   take?: number;

//   @Field({ nullable: true })
//   title?: string;
// }

// @Query(returns => [Recipe])
//   async recipes(@Args() { title, startIndex, endIndex }: GetRecipesArgs)
