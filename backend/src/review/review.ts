import { Author } from "author/author";
import { Game } from "game/game";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
export class Review {
  @Field(() => ID)
  id!: string;
  @Field(() => Int)
  rating!: number;
  @Field()
  content!: string;
  @Field(() => Author)
  author!: Author;
  @Field(() => Game)
  game!: Game;
}
