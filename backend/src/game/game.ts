import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Game {
  @Field(() => ID)
  id!: string;
  @Field()
  title!: string;
  @Field(() => [String])
  platform!: string[];
}
