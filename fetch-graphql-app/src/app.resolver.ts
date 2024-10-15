import { Mutation, Resolver, Query, Args } from "@nestjs/graphql";

@Resolver()
export class AppResolver {
    @Query(() => String)
    sayHello(): string{
        return 'Hello World'
    }

    @Mutation(() => String)
    updateMessage(@Args('newMessage') newMessage: string ): string{
        return `Hello ${newMessage}`
    }
}