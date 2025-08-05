import { Resolver, Query } from "@nestjs/graphql";

@Resolver()
export class AppResolver {
  @Query(() => String)
  hello(): string {
    return "Hello World!";
  }

  @Query(() => String)
  testCall(): string {
    return "This is a test call";
  }
}
