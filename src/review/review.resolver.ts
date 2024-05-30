import { Arg, Query, Resolver } from "type-graphql";
import { Review } from "./review";
import { ReviewModel } from "model";

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
