import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { Author } from "./author";
import { MyContext } from "app";
import { Authenticated } from "auth/authenticated";
import { AuthorModel } from "../model";

@Resolver(() => Author)
export class AuthorResolver {
  @UseMiddleware(Authenticated)
  @Query(() => Author)
  async author(
    @Arg("id", () => String) _id: string,
    @Ctx() ctx: MyContext
  ): Promise<Author> {
    console.log(ctx, "ctx");
    const author = await AuthorModel.findOne({ id: _id });
    if (!author) throw new Error("Author not found");
    return author;
  }

  @Query(() => [Author])
  async getAuthors(): Promise<Author[]> {
    return await AuthorModel.find();
  }
}
