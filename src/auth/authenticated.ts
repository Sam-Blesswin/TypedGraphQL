import { MyContext } from ".././app";
import { AuthenticationError, MiddlewareFn } from "type-graphql";

export const Authenticated: MiddlewareFn<MyContext> = async (
  { context },
  next
) => {
  if (context.token != "sam") {
    throw new AuthenticationError("Not authenticated");
  }

  return next();
};
